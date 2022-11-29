import { useState, useEffect } from 'react';
import APIManager from "../../services/api"
import { useNavigate } from 'react-router-dom';

const EditApartment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [surface, setSurface] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      apartment: {
        title: title,
        description: description,
        price: price,
        surface: surface,
        address: address,
        city: city,
        postal_code: postalCode
      }
    }
    try {
      const id = window.location.pathname.split('/')[2];
      await APIManager.updateApartment(id, data);
      navigate('/myapartments');
    } catch (err) {
      console.error(err)
    }
  }

  const SetAll = (apartment) => {
    apartment.title ? setTitle(apartment.title) : setTitle("");
    apartment.description ? setDescription(apartment.description) : setDescription("");
    apartment.price ? setPrice(apartment.price) : setPrice("");
    apartment.surface ? setSurface(apartment.surface) : setSurface("");
    apartment.address ? setAddress(apartment.address) : setAddress("");
    apartment.city ? setCity(apartment.city) : setCity("");
    apartment.postal_code ? setPostalCode(apartment.postal_code) : setPostalCode("");
  }

  useEffect(() => {
    const id = window.location.pathname.split('/')[2];
    const fetchApartment = async () => { await APIManager.getApartment(id).then(data => SetAll(data)) };
    fetchApartment().catch(console.error);
  }, [])

  return <>
    <h1 className="title-form">Edit apartment ad</h1>
    <form onSubmit={handleSubmit} className="container-form">
      <div className='input-container'>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="title"
          placeholder="Title"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="textarea"
          id="description"
          placeholder="Description"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          id="price"
          placeholder="Price"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="surface">Surface</label>
        <input
          onChange={(e) => setSurface(e.target.value)}
          value={surface}
          type="number"
          id="surface"
          placeholder="Surface"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="address">Address</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
          id="address"
          placeholder="Address"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="city">City</label>
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          id="city"
          placeholder="City"
        />
      </div>
      <div className='input-container'>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          type="text"
          id="postalCode"
          placeholder="Postal Code"
        />
      </div>
      <button>Update</button>
    </form>
  </>
}

export default EditApartment