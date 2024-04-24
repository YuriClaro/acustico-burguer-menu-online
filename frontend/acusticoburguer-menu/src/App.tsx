import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData'
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  const [cartItems, setCartItems] = useState<{ title: string, price: number }[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState<boolean>(false); // Novo estado para controlar a exibição do popup de compra

  const handleAddToCart = (title: string, price: number) => {
    setCartItems(prevCartItems => [...prevCartItems, { title, price }]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(prevCartItems => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleFinalizePurchase = () => {
    setIsPurchasePopupOpen(true); 
  };

  const handleConfirmPurchase = () => {
    const pedidoNumber = Math.floor(100 + Math.random() * 900);
  
    let whatsappMessage = `*ACÚSTICO BURGUER*%0A%0APedido: ${pedidoNumber}%0A%0AResumo do pedido%0A`;
    cartItems.forEach((item, index) => {
      whatsappMessage += `- R$${item.price.toFixed(2)} ${item.title}%0A`;
    });
    whatsappMessage += `%0ATotal: R$${calculateTotalPrice().toFixed(2)}`;
  
    const whatsappLink = `https://wa.me/5512982566796?text=${whatsappMessage}`;
  
    window.open(whatsappLink);
    
    setIsPurchasePopupOpen(false); 
    setCartItems([]);
  };

  return (
    <div className="container">
      <h1><b>Cardápio</b></h1>
      <h2 className='subtitulo'>Peça já seu lanche!</h2>
      <div className="card-grid">
        {data?.map((foodData, index) => 
          <Card
            key={index}
            price={foodData.price}
            description={foodData.description} 
            title={foodData.title} 
            image={foodData.image}
            onRemove={() => handleRemoveFromCart(index)}
            onAdd={() => handleAddToCart(foodData.title, foodData.price)}
          />
        )}
      </div>
      <div className="cart">
        {calculateTotalPrice() > 0 && (
          <ul>
            <li><p>Total: R${calculateTotalPrice().toFixed(2)}</p></li>
            <li><button onClick={handleFinalizePurchase}>Carrinho</button></li>
          </ul>
        )}
      </div>

      {isPurchasePopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Resumo da Compra</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} - R${item.price.toFixed(2)} 
                  <button onClick={() => handleRemoveFromCart(index)}>Remover</button>
                </li>
              ))}
            </ul>
            <p>Total: R${calculateTotalPrice().toFixed(2)}</p>
            <p>Tem certeza que deseja finalizar a compra?</p>
            <div>
              <button onClick={handleConfirmPurchase}>Confirmar</button>
              <button onClick={() => setIsPurchasePopupOpen(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;
