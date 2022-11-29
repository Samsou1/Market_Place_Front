import React from 'react'
import { useState, useEffect } from 'react'
import APIManager from '../../services/api';

const DeleteApartment = () => {
  [id, setId] = useState('');

  useEffect(() => {
    setId(window.location.pathname.split('/')[2]);
  }, [])

  const handleClick = () => {

  }

  return (
    <button onClick={handleClick}>DeleteApartment</button>
  )
}

export default DeleteApartment