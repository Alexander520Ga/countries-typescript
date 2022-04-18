import React, { useState } from "react";
import { ICardData } from "../../interfaces/country.interface";
import "./styles.css";

interface ISearchesProps {
  data: ICardData[];
  setNewData: React.Dispatch<React.SetStateAction<ICardData[]>>;
}

const Searches = ({ data, setNewData }: ISearchesProps) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value);
  };

  const filterForSelect = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    if (event.target.value === "") {
      return setNewData(data);
    } else {
      const valueSelect = event.target.value;
      const filtroSelect:ICardData[] = data.filter((n) => n.region === valueSelect);
      return setNewData(filtroSelect);
    }
  }
  const filterForText = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.BaseSyntheticEvent<KeyboardEvent, HTMLInputElement, EventTarget>
  ):void => {
    e.preventDefault();
    const valor:string = (e.target as HTMLInputElement).value.toLowerCase();

    const filtro:ICardData[] = data.filter((n:ICardData) => {
      const NameCountry:string = n.name.common.toLowerCase();
      if (NameCountry.indexOf(valor) !== -1) {
        return n;
      }
    });
    setNewData(filtro);
  };

  return (
    <div>
      <header className="container filter-content my-2 mt-4">
        <form className="form-search">
          <input
            id="search"
            type="search"
            placeholder="searche for contry"
            autoComplete="off"
            onChange={handleInputChange}
            value={value}
            onKeyUp={filterForText}
          />
        </form>
        <div className="custom-select" style={{ width: "200px" }}>
          <select id="selectForm" onChange={filterForSelect}>
            <option value="">Filter by region</option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </header>
    </div>
  );
};

export default Searches;
