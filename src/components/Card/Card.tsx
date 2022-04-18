import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface IInformationData {
  flag: string;
  name: string;
  nameOfficial: string;
  population: number;
  capital: string;
  region: string;
  id:string
}

const Card = ({
  flag,
  name,
  population,
  capital,
  region,
  id
}: IInformationData) => {
  
  return (
    <article className="card">
      <img src={flag} className="img-fluid" alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>
          <b>poblacion:</b>
          {population}
        </p>
        <p>
          <b>capital:</b>
          {capital}
        </p>
        <p>
          <b>region:</b>
          {region}
        </p>
        <Link to={`country/${id}`} >
          Leer Mas...
        </Link>
      </div>
    </article>
  );
};

export default Card;








// https://youtu.be/QfuMXo46xgM?t=304