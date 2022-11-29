import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from "../../services/api";

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

  return (
    <div>ApartmentView
      <h2>Title: {apartment.title}</h2>
      <p>Price: {apartment.price}</p>
      <p>Surface: {apartment.surface}</p>
      <p>Description: {apartment.description}</p>
      <p>Address: {apartment.address}</p>
      <p>City: {apartment.city}</p>
      <p>Postal code: {apartment.postal_code}</p>
      <p>Contact: {apartment.user.email}</p>

      <p>{apartment.basement}</p>
      <p>{apartment.furnished}</p>
      <p>{apartment.garden}</p>
      <p>{apartment.custodian}</p>

    </div>
  )
}

export default ApartmentView