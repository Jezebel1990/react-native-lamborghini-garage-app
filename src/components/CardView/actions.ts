import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCardData = async (
    id: number, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    try {
     await fetchGetCarData(id, setCarData);
    } catch(error){
     console.log("Erro ao buscar da api:", error);
     setCarData(null);
    }
 };

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  if (carData && carData.id > 1) {
    await fetchGetCarData(carData.id - 1, setCarData);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  if (carData && carData.id < 10) {
    await fetchGetCarData(carData.id + 1, setCarData);
  }
};