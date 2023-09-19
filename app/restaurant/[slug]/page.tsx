"use client"
import Description from "./components/Description";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationForm from "./components/ReservationForm";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

export default function RestaurantDetails(){
return (
   <>
      <div className="bg-white w-[70%] rounded p-3 shadow text-black">
        <RestaurantNavbar/>
        <Title/>
        <Rating/>
        <Description/>
        <Images/>
        <Reviews/>
      </div>
      <ReservationForm/>
  </>

)
}