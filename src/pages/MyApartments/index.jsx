import React from 'react'
import { useState, useEffect } from 'react'
import MyApartmentsCards from './MyApartmentsCards'
import APIManager from '../../services/api'
import { Link } from 'react-router-dom'

const MyApartments = () => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    const fetchData = async () => {await APIManager.getMyApartments().then(data => setApartments(data))};
    fetchData().catch(console.error);
  },[])

  return (
    <div>
      <h2>My apartments:</h2>
      <p>You can also create a new ad by clicking on this link:</p>
      <Link className="link" to='/newapartment' >New apartment</Link>
      <div className='apartmentCards'>
        {apartments.map(apartment => {
          return <MyApartmentsCards key={apartment.id + apartment.title} apartment={apartment}/>
        })}
      </div>
    </div>
  )
}

export default MyApartments