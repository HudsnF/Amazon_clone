import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import Footer from "./Footer/Footer";

export default function Main() {
    return (
        <div className="h-full bg-gradient-to-b from-gray-400 to-gray-100">
            <FirstSection />
            <SecondSection />
            <Footer/>
        </div>
    )
}
