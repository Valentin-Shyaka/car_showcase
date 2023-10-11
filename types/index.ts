import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}
export interface NavProps{
    qtitle: string;
    qtext: string;
   
    
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface LoginProps {
    isOpen: boolean;
    closeModal: () => void;
  }
export interface ButtonProps {
    text: string;
    active: boolean;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    btnType: "submit" | undefined
  
  }
export interface CarDetailsProps{
    imageurl:string;
    carName:string;
    location:string;
    miles: number;
    price:number;
    onClick?: void;
  }

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
