import { Link } from "react-router-dom"

const ApartmentCard = ({apartment}) => {
  return (
    <div className='apartmentCard'>
      <h3>Title:{apartment.title}</h3>
      <p>Price:{apartment.price}</p>
      <p>Description:{apartment.description}</p>
      <p>TODO: PICTURE</p>
      <div>
        <Link className="link" to={`/apartments/${apartment.id}`}>Have a look</Link>
      </div>
    </div>
  )
}

export default ApartmentCard