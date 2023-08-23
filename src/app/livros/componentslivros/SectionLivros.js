import SectionLivrosOne from "./SectionLivrosOne";
import SectionLivrosTwo from "./SectionLivrosTwo";

export default function SectionLivros() {
    return (
        <div className="flex flex-col w-fit ">
            <SectionLivrosOne />
            <SectionLivrosTwo/>
        </div>
    )
}