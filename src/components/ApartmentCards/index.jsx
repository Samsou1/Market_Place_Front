import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import ApartmentCard from "./ApartmentCard";
import SearchBar from "../SearchBar";

const ApartmentCards = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    if (window.location.search) {
      const search = window.location.search.split("?search=")[1];
      const fetchData = async () => {
        await APIManager.getFilteredApartments(search).then((data) =>
          setApartments(data)
        );
      };
      fetchData().catch(console.error);
    } else {
      const fetchData = async () => {
        await APIManager.getAllApartments().then((data) => setApartments(data));
      };
      fetchData().catch(console.error);
    }
  }, []);

  return (
    <section className="apartement-cards-container">
      <h2>Our selection of apartments:</h2>
      <SearchBar/>
      <div className="apartmentCards">
        {apartments.map((apartment) => {
          return (
            <ApartmentCard
              key={apartment.id + apartment.title}
              apartment={apartment}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ApartmentCards;
