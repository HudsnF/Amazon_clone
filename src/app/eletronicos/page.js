'use client'

import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import NavbarEletronicos from "./NavbarEletronicos";
import MainEletronicos from "./MainEletronicos";

export default function Eletronicos() {
    return (
        <div>
            <Navbar />
            <NavbarEletronicos />
            <MainEletronicos />
            <Footer />
        </div>
    )
}