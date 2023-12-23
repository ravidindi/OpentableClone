import Navbar from "../components/Navbar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";

export default function SearchPage(){
    return (
       <>
   <Navbar/>
    <Header/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <Sidebar/>
      <RestaurantCard/>
    </div>
  </>

    )
}