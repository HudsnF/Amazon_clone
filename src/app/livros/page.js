'use client'

import Navbar from "../Navbar/Navbar";
import Footer from "../main/Footer/Footer";
import MainLivros from "./MainLivros";
import NavbarLivros from "./NavbarLivros";

export default function Livros() {
    return (
        <div>
            <Navbar />
            <NavbarLivros/>
            <MainLivros/>
            <Footer />
        </div>
    )
}