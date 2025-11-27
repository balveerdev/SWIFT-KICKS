import React from "react";
import Header from "../components/Header";
import Gender from "../about/Gender";
import Footer from "../components/Footer";
import Review from '../components/Review';
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function About(){
  const {id} = useParams();
   return(
    <>
       
     <Header />
      <Gender />
      <Outlet /> {/* 👈 URL content  */}
      <Review />
      <Footer />
    
    </>

    )
}