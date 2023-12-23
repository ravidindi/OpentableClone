import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

export default function RestaurantMenu({params}:{params:{slug:string}}){
    return (
       <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar name={params.slug}/>
        <Menu/>
 </div>
    </div>
    )
}