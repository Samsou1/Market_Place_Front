import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import APIManager from "../../services/api";
import { Link } from 'react-router-dom';
import DeleteApartmentButton from '../../components/DeleteApartmentButton';
import '../../styles/components/_apartmentCards.scss'

const ApartmentView = () => {
  const [apartment, setApartment] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split('/')[2];
    const fetchApartment = async () => { await APIManager.getApartment(id).then(data => setApartment(data)) };
    fetchApartment().catch(console.error);
  }, [])

  if (!apartment.user) {
    return <h3>No apartment with such id</h3>
  }

  if (Cookies.get('currentUser') && JSON.parse(Cookies.get('currentUser')).id === apartment.user_id) {
    return (
      <div className='apartmentCard show'>   
        <div className="product-details">    
          <h3>{apartment.title}</h3>   
          <p className="information">{apartment.description}</p>
          <p className="price"><strong className='bold'>Price: </strong>{apartment.price} €</p>
          <p><strong className='bold'>Surface: </strong>{apartment.surface}</p>
          <p><strong className='bold'>Address: </strong>{apartment.address}</p>
          <p><strong className='bold'>City: </strong>{apartment.city}</p>
          <p><strong className='bold'>Postal code: </strong>{apartment.postal_code}</p>
          <p><strong className='bold'>Contact: </strong>{apartment.user.email}</p>    
          <container className="current_user_access">    
            <button className="edit_btn">              
              <span><Link className="edit" to={`/editapartment/${apartment.id}`}>Edit</Link></span>
            </button>   
            <button className="edit_btn">              
              <span><DeleteApartmentButton/></span>
            </button>  
          </container>          
        </div>
        
        <div className="product-image">  
          <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="anouncement_illustration" />
        </div>
      </div>
    )
  } else {
    return (
      <div className='apartmentCard show'>   
      <div className="product-details">    
        <h3>{apartment.title}</h3>   
        <p className="information">{apartment.description}</p>
        <p className="price"><strong className='bold'>Price: </strong>{apartment.price} €</p>
        <p><strong className='bold'>Surface: </strong>{apartment.surface}</p>
        <p><strong className='bold'>Address: </strong>{apartment.address}</p>
        <p><strong className='bold'>City: </strong>{apartment.city}</p>
        <p><strong className='bold'>Postal code: </strong>{apartment.postal_code}</p>
        <p><strong className='bold'>Contact: </strong>{apartment.user.email}</p>         
      </div>
      
      <div className="product-image">  
        <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="anouncement_illustration" />
      </div>
    </div>
    )
  }
}

export default ApartmentView;