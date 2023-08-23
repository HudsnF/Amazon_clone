'use client'

import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import FirstSectionMusic from "./FirstSectionMusic";
import SecondSectionMusic from "./SecondSectionMusic";


export default function Musica() {
    return (
        <div>
            <Navbar />
            <FirstSectionMusic/>
            <SecondSectionMusic/>
            <Footer />
        </div>

    )
}