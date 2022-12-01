import { useState } from 'react';
import APIManager from "../../services/api";
import { useNavigate } from 'react-router-dom';

const NewApartment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [surface, setSurface] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [picture, setPicture] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("picture", e.target.file.files[0])
    data.append("description", description)
    data.append("price", price)
    data.append("surface", surface)
    data.append("address", address)
    data.append("city", city)
    data.append("postal_code", postalCode)
    console.log(e.target.file.files[0])
    // const data = {
    //   apartment: {
    //     title: title,
    //     description: description,
    //     price: price,
    //     surface: surface,
    //     address: address,
    //     city: city,
    //     postal_code: postalCode,
    //     picture: document.querySelector('#file').value
    //   }
    // }
    try {
        console.log(data)
      await APIManager.newApartment(data);
      navigate('/myapartments');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
            <h1 className="new-title">New apartment ad </h1>
            <form onSubmit={handleSubmit} className="new-container-form">
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
                        type="text"
                        id="price"
                        placeholder="Price"
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="surface">Surface</label>
                    <input
                        onChange={(e) => setSurface(e.target.value)}
                        value={surface}
                        type="text"
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
                <div className='input-container'>
                    <label htmlFor="file">Pictures</label>
                    <input
                        type="file"
                        id="file"
                        placeholder='Picture'
                        accept="image/*" 
                        multiple={false}
                        name="file"
                    />
                </div>
                <input type="submit" value="Begin" />
            </form>
        </>
  )
}

export default NewApartment;