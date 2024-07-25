import React ,{useState} from 'react';
import {Card ,Button} from 'react-bootstrap';
import '../components/PricesCard.css';
import { useNavigate } from 'react-router-dom';

const prices =[
  { name : "Wash and Fold" , price : "20 to 30ghc per kilogram of laundry"},
  { name: "Wash and Touch", price: "35 to 50ghc per kilogram of laundry" },
  { name: "Ironing and Pressing", price: "3 to 7ghc per kilogram of laundry (Depends on nature of garment.)" },
  { name: "Dry Washing", price: "35 to 50ghc per kilogram of laundry" },
  { name: "Pick up and delivery", price: "Price will be added depending on the location upon delivery" }
];

const PricesCard = () => {
  const [selectedPrice , setSelectedPrice] = useState(null);
  const navigate = useNavigate();


  const handlePriceClick = (price) => {
      setSelectedPrice(price);
  };

  const handleChooseClick  = () =>{
    if(selectedPrice){
      alert(`You've chosen ${selectedPrice.name} priced at ${selectedPrice.price}`);
      navigate('/find-location');
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