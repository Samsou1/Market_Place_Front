import Cookies from 'js-cookie';
import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from "../../services/api";
import { Link } from 'react-router-dom';
import DeleteApartmentButton from '../../components/DeleteApartmentButton';
import '../../styles/components/_apartmentCards.scss'

const ApartmentView = () => {
  const [apartment, setApartment] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split('/')[2];
    const fetchApartment = async () => {await APIManager.getApartment(id).then(data => setApartment(data))};
    fetchApartment().catch(console.error);
  }, [])

  if(!apartment.user){
    return <h2>No apartment with such id</h2>
  }

  if(Cookies.get('currentUser') && JSON.parse(Cookies.get('currentUser')).id === apartment.user_id){
    return (
      <div className='apartmentCard show'>   
        <div className="product-details">    
          <h3>{apartment.title}</h3>   
          <p className="information">{apartment.description}</p>
          <p className="price">{apartment.price} €</p>
          <p>Surface: {apartment.surface}</p>
          <p>Address: {apartment.address}</p>
          <p>City: {apartment.city}</p>
          <p>Postal code: {apartment.postal_code}</p>
          <p>Contact: {apartment.user.email}</p>   
          <div className="control">    
            <button className="btn">              
              <span className="buy"><Link className="link" to={`/editapartment/${apartment.id}`}>Edit</Link></span>
              <DeleteApartmentButton/>
            </button>   
          </div>          
        </div>
        
        <div className="product-image">  
          <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    )
  }else{
    return (
      <div className='apartmentCard show'>   
      <div className="product-details">    
        <h3>{apartment.title}</h3>   
        <p className="information">{apartment.description}</p>
        <p className="price">{apartment.price} €</p>
        <p>Surface: {apartment.surface}</p>
        <p>Address: {apartment.address}</p>
        <p>City: {apartment.city}</p>
        <p>Postal code: {apartment.postal_code}</p>
        <p>Contact: {apartment.user.email}</p>         
      </div>
      
      <div className="product-image">  
        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
    )
  }

  
}

export default ApartmentView