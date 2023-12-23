import Navbar from './components/Navbar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import { Cuisine, PRICE, PrismaClient,Location } from '@prisma/client'

const prisma=new PrismaClient()

export interface RestaurantCardType{
  id: number,
  name: string,
  main_image: string,
  slug:string,
  cusine: Cuisine,
  location: Location,
  price :PRICE

}

const fetchRestaurants= async  (): Promise<RestaurantCardType[]>=>{
  const restaurants= await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cusine:true,
      location:true,
      price:true,
      slug:true
    }
  });
  return restaurants;
}
export default async function Home() {

  const restaurants=await fetchRestaurants();
  console.log(restaurants)
  return (
    <>
     <Navbar />
    <main>
      <Header/>
      <div className="w-5/6">
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
     {restaurants.map((restaurant)=><RestaurantCard restaurant={restaurant}/>)}
     </div>
     </div>
    </main>
 </>

  )
}
