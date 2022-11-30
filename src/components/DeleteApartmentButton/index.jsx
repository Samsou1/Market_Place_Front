import { useState, useEffect } from 'react';
import APIManager from '../../services/api';
import { useNavigate } from 'react-router-dom';

const DeleteApartmentButton = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  useEffect(() => {
    setId(window.location.pathname.split('/')[2]);
  }, [])

  const handleClick = () => {
    APIManager.deleteApartments(id);
    navigate('/myapartments');
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}

export default DeleteApartmentButton;