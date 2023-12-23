import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from './components/Title'
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

interface Restaurant{
  id: number;
    name: string;
    description: string;
    images: string[];
}


const getRestaurantBySlug=async (slug:string):Promise<Restaurant>=>{
   
  const restaurant= await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      id:true,
      name:true,
      description:true,
      images:true
    }
   })
   if(!restaurant)
   throw new Error()
  return restaurant;
  }



export default async function RestaurantDetails({params}:{params:{slug:string}}){

  

  const restaurant= await getRestaurantBySlug(params.slug)
  console.log(restaurant)
    return (
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow"> 
        <RestaurantNavbar name={params.slug}/>
       <Title name={restaurant.name}/>
        <Rating/>
        <Description description={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews/>
      </div>
      <ReservationCard/>
    </div>

    )
}