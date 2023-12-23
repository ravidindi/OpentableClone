import Navbar from "../../components/Navbar";
import Header from "./components/Header";
import Form from "./components/Form";

export default function ReservationPage(){
    return (
      <>
    <Navbar />
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header/>
        <Form/>
      </div>
    </div>
    </>  

    )
}