import { Link } from "react-router-dom"

const ApartmentCard = ({apartment}) => {
  return (
    <div className='apartmentCard'>   
      <div class="product-details">    
        <h3>{apartment.title}</h3>   
        <p class="information">{apartment.description}</p>   
        <div class="control">    
          <button class="btn">
            <span class="price">{apartment.price} €</span>
            <span class="buy"><Link className="link" to={`/apartments/${apartment.id}`}>Have a look</Link></span>
          </button>   
        </div>          
      </div>
      
      <div class="product-image">  
        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="info">
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

export default ApartmentCard