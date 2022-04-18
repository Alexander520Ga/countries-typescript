import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { ICardData } from "./interfaces/country.interface";
import AppRouter from "./router/AppRouter";

function App() {
  const { data } = useFetch();
  const [newData, setNewData] = useState<ICardData[]>(data);
  return (

      < AppRouter data={data} newData ={newData} setNewData={setNewData} />
  );
}

export default App;
  


