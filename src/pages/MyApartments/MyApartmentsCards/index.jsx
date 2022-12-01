import { Link } from 'react-router-dom'

const MyApartmentsCards = ({ apartment }) => {
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
        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="info">
          <ul>
            <li><strong>Surface: </strong>{apartment.surface} m²</li>
            <li><strong>Address: </strong>{apartment.address}</li>
            <li><strong>City: </strong>{apartment.city}</li>
            <li><strong>Postal code: </strong>{apartment.postal_code}</li>
            <li><img src='' alt=''></img></li>    
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyApartmentsCards