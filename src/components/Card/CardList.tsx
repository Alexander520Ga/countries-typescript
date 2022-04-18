import { ICardData, ICardList } from "../../interfaces/country.interface";
import Card from "./Card";
import "./styles.css";

const CardList = ({ data }: ICardList) => {
  console.log(data)
  return (
    <div className="animate__animated animate__bounce">
      <main className="container-main grid mt-4 ">
        { data.map((n:ICardData, index:number) => {
          const { flags, name, population, capital, region } = n;
          //flags.png,name.common,
          return (
            <Card
              key={index}
              flag={flags.png}
              name={name.common}
              nameOfficial={name.official}
              population={population}
              capital={capital}
              region={region}
              id={name.common}
            />
          );
        })}
      </main>
    </div>
  );
};

export default CardList;