import SectionEletronicosOne from "./componentsEletronicos/SectionEletronicosOne";
import SectionEletronicosTwo from "./componentsEletronicos/SectionEletronicosTwo";

export default function MainEletronicos() {
    return (
        <>
            <div className="flex">
                <SectionEletronicosOne/>
                <SectionEletronicosTwo/>
            </div>
            </>
    )
}