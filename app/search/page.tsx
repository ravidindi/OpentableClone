import Link from "next/link";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RestaurantCar from "./components/RestaurantCar";
import Sidebar from "./components/Sidebar";

export default function Search(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
  <main className="max-w-screen-2xl m-auto bg-white">
   <Navbar/>
    <SearchBar/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <Sidebar/>
      <RestaurantCar/>
    </div>
  </main>
</main>

    )
}