import { ICardData } from "../../interfaces/country.interface"

const getCountryById = (data:ICardData[],ID:string | undefined) => {
    return data.find((i:ICardData)=> i.name.common === ID )

}

export default getCountryById