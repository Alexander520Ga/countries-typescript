interface IInformationLanguage {
  [x:string]:string
}
interface IInformation { 
  name:string

}

interface ICurrencies {//tipado generico
  [x:string]: IInformation
}

interface IInformationLanguages {
  
  [x:string]:IInformationLanguage
  
}
interface INameNative {
  common:string
}
interface INativeName {
  [x:string]:INameNative
}
interface IName {
    common:string,
    official:string
    nativeName:INativeName
  }
  interface IFlag {
    png:string
  }
  export interface ICardList {
    data: ICardData[];
  }
export interface ICardData {
    flags: IFlag;
    name: IName;
    NombreOficial:string,
    population: number;
    capital: string;
    region: string;
    altSpellings:string[] ,
    subregion:string,
    tld:string[],
    currencies:ICurrencies,
    languages:IInformationLanguages
  }

//   const obj: ICurrencies ={
//     UYU:{
//       name:"name"
//     }
//   }

//  const key = Object.keys(obj)[0]
//  obj[key as keyof ICurrencies ]