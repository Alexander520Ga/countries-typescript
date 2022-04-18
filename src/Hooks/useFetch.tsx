import { useEffect, useState } from "react";
import { ICardData } from "../interfaces/country.interface";

const useFetch = () => {
  const [data, setData] = useState<ICardData[]>([]);

  const url:string = "https://restcountries.com/v3.1/all";

  const dataCard = async () => {
    const req = await fetch(url);
    const data:ICardData[] = await req.json();
    setData(data);
    return data;
  };
  useEffect(() => {
    dataCard();
  }, []);

  return { data,dataCard };
};

export default useFetch;
