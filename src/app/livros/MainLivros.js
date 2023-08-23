
import SectionLivros from "./componentslivros/SectionLivros";
import AsideLivros from "./componentslivros/AsideLivros";

export default function MainLivros() {
    return (
        <div className="flex">
            <AsideLivros/>
            <SectionLivros/>
        </div>
    )
}