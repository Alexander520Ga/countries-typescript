import { useEffect } from "react";
import CardList from "./components/Card/CardList";
import NoFind from "./components/searches/NoFind";
import Searches from "./components/searches/Searches";
import { ICardData } from "./interfaces/country.interface";

interface IDatas {
    data:ICardData[],
    newData:ICardData[],
    setNewData:React.Dispatch<React.SetStateAction<ICardData[]>>
}

const ScreenCountry = ({data,newData,setNewData}:IDatas) => {
  useEffect(() => {
    setNewData(()=> data);
  }, [data,setNewData]);

  return (
    <div className="App">
      
      <Searches data={data} setNewData={setNewData} />
      {newData?.length === 0 ? <NoFind /> : <CardList data={newData} />}
    </div>
  );
};

export default ScreenCountry;
