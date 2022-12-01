import { Link } from "react-router-dom";

const ApartmentCard = ({ apartment }) => {
  return (
    <div className='apartmentCard'>   
      <div className="product-details">    
        <h3>{apartment.title}</h3>   
        <p className="information">{apartment.description}</p>   
        <div className="control">    
          <button className="btn">
            <span className="price">{apartment.price} €</span>
            <span className="buy"><Link className="link" to={`/apartments/${apartment.id}`}>Have a look</Link></span>
          </button>   
        </div>          
      </div>
      
      <div className="product-image">  
        <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
        <div className="info">
          <ul>
            <li><strong>Surface: </strong>{apartment.surface} m²</li>
            <li><strong>Address: </strong>{apartment.address}</li>
            <li><strong>City: </strong>{apartment.city}</li>
            <li><strong>Postal code: </strong>{apartment.postal_code}</li>            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard;