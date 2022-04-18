import { Routes, Route } from "react-router-dom";
import ScreenCountry from "../ScreenCountry";
import { BrowserRouter } from "react-router-dom";
import CountryFullCard from "../components/CountryFullCard/CountryFullCard";
import { ICardData } from "../interfaces/country.interface";
import TitleAndDarkMode from "../components/TextAndDarkMode/TitleAndDarkMode";
interface IDatas {
    data:ICardData[],
    newData:ICardData[],
    setNewData:React.Dispatch<React.SetStateAction<ICardData[]>>
}
const AppRouter = ({data,newData,setNewData}:IDatas) => {
  return (
    <BrowserRouter>
              <TitleAndDarkMode />
        <Routes>
            <Route path="/" element={<ScreenCountry data={data} newData={newData} setNewData={setNewData}  />} />
            <Route path="/country/:countryId" element={<CountryFullCard data={data} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter