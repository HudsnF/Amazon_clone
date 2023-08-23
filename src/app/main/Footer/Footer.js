import ScrollToTopButton from "./ScrollToTopButton.js";
import FirstSectionFooter from "./FirstSectionFooter.js";
import SecondSectionFooter from "./SecondSectionFooter.js";


export default function Footer() {
    return (
        <footer className="">
            <ScrollToTopButton />
            <FirstSectionFooter />
            <SecondSectionFooter />
        </footer>
    )
}