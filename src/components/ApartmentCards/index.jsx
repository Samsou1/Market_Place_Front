import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from "../../services/api";
import ApartmentCard from './ApartmentCard';

const ApartmentCards = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {await APIManager.getAllApartments().then(data => setApartments(data))};
    fetchData().catch(console.error);
  },[])

  return (
    <section className='apartement-cards-container'>
      <h2>Our selection of apartments:</h2>
      <div className='apartmentCards'>
        {apartments.map(apartment => {
          return <ApartmentCard key={apartment.id + apartment.title} apartment={apartment}/>
        })}
      </div>
    </section>
  )
}

export default ApartmentCards