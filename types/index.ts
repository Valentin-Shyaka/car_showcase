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
export interface CarCardProps{
    link: string;
    name:string;
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
