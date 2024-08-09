import React ,{useState} from 'react';
import {Card ,Button} from 'react-bootstrap';
import '../components/PricesCard.css';
import { useNavigate , useLocation } from 'react-router-dom';

const prices =[
  { name : "Wash and Fold" , price : "20 to 30ghc per kilogram of laundry" , id: "wash-and-fold" },
  { name: "Wash and Touch", price: "35 to 50ghc per kilogram of laundry" , id: "wash-and-touch" },
  { name: "Ironing and Pressing", price: "3 to 7ghc per kilogram of laundry (Depends on nature of garment.)"  , id:"ironing-pressing"},
  { name: "Dry Washing", price: "35 to 50ghc per kilogram of laundry" , id:"dry-washing" },
  { name: "Pick up and delivery", price: "Price will be added depending on the location upon delivery" , id: "pick-up-and-delivery" }
];

const PricesCard = () => {
  const [selectedPrice , setSelectedPrice] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Highlight selected item based on hash
  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    const item = prices.find(price => price.id === hash);
    if (item) {
      setSelectedPrice(item);
    }
  }, [location.hash]);

  const handlePriceClick = (price) => {
      setSelectedPrice(price);
  };

  const handleChooseClick  = () =>{
    if(selectedPrice){
      alert(`You've chosen ${selectedPrice.name} priced at ${selectedPrice.price}`);
      navigate('/booking');
    } else {
      alert("Please select a price first");
    }
  }





  return (
    <div className="prices-card-container">
          <Card className='prices-card'>
            <Card.Body>
              {prices.map((price, index) => (
                <Card.Text
                  key={index}
                  id={prices.id}
                  className={`price-item ${selectedPrice === price ? 'selected' : ''}`}
                  onClick={() => handlePriceClick(price)}
                >
                   <span className="price-name">{price.name}</span> - <span>{price.price}</span>
                </Card.Text>
              ))}
              <Button 
              variant="warning"
              className='choose-button'
              onClick = {handleChooseClick}
              disabled={!selectedPrice}
              >
                Choose
              </Button>
              
            </Card.Body>
          </Card>
    </div>
  );

};
export default PricesCard;