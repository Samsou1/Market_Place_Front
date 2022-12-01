import { useState, useEffect } from 'react';
import MyApartmentsCards from './MyApartmentsCards';
import APIManager from '../../services/api';
import { Link } from 'react-router-dom';

const MyApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => { await APIManager.getMyApartments().then(data => setApartments(data)) };
    fetchData().catch(console.error);
  }, [])

  return (
  <section className='apartement-cards-container'>
    <h2 className="apartement_title">My apartments:</h2>
    <div className='apartmentCards'>
      {apartments.map(apartment => {
        return <MyApartmentsCards key={apartment.id + apartment.title} apartment={apartment}/>
      })}
    </div>
    <container className="new_btn_footer"><Link className="new_btn" to='/newapartment'>New apartment</Link></container>
  </section>
  )
}

export default MyApartments;