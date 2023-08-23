'use client'

import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import FirstSectionLerGratis from "./FirstSectionLerGratis";
import SecondSectionLerGratis from "./SecondSectionLerGratis";


export default function LerGratis() {
    return (
        <div>
            <Navbar />
            <FirstSectionLerGratis/>
            <SecondSectionLerGratis/>
            <Footer />
        </div>

    )
}