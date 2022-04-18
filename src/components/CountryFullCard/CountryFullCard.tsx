import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ICardData } from "../../interfaces/country.interface";
import getCountryById from "./getCountryById";
interface ICountryFullCard {
  data: ICardData[];
}
const CountryFullCard = ({ data }: ICountryFullCard) => {
  const { countryId } = useParams();
  const navigate = useNavigate()

  const country = useMemo(()=>getCountryById(data, countryId),[data,countryId]);

  if (!country) {
    return <Navigate to="/" />;
  }
  const nameNative = Object.values(country.name.nativeName)[0].common
  const currencies = Object.values(country.currencies)[0].name
  const languages = Object.values(country.languages).map(n => n + '  ')

  const backButton =()=>{
    navigate(-1)
  }
  return (
    <div className="m-5 ">
      <div className="">
      <button className="btn btn-outline-info" onClick={backButton}>
            
     <i className="fa-solid fa-arrow-left-long"></i> Back
      </button>
      </div>
    <div className="row mt-5 ">
        <div className="col-md-4 ">

        <img src={country.flags.png} alt={country.name.official} className='img-thumbnail ' />
        </div>
     
          <div className="col-5">
            <h2> <b>{country.name.common}</b> </h2>
            <br />
            <p ><b>Native Name: </b>{nameNative}</p>
                <p><b>Population: </b>{country.population}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Sub Region: </b>{country.subregion}</p>   
                <p><b>Capital: </b>{country.capital}</p>
                <p><b>Top Level Domain: </b>{country.tld}</p>
                <p><b>Currencies: </b>{currencies}</p>
                <p><b>Languages: </b>{languages}</p>
            </div>
             
     </div>
    </div>
  
  );
};

export default CountryFullCard;