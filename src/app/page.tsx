"use client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  Axios.defaults.withCredentials = true;

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:8000/").then((response) => {
      console.log(response.data.loggedIn);
      if(response.data.loggedIn === true){
        setLoggedIn(true);
      }
    })
  }, [])
    return (
    <>
    <Navbar loggedIn={loggedIn}/>
    <Main />
    <Features />
    <Footer />
    </>
  );
}
