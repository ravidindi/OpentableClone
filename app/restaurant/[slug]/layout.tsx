import Navbar from "../../components/Navbar";
import Header from "./components/Header";

export default function RestaurantLayout({children,params}:{params:{slug:string},children: React.ReactNode},
  ) {
  return (
    <>
    <Navbar />
    <Header slug={params.slug}/>
       {children}
    </>
  )
}
