import { BuildingCardView } from "./BuildingCardView";
import { PSCButtons } from "./PSCButtons";

export function PropertyShowCase() {
    return (
        <div className="xl:mx-24 lg:mx-6 mt-24">
            <div className="mx-auto flex items-center justify-items-center flex-col">
                <h1 className="font-roboto font-medium  xl:text-5xl md:text-5xl sm:text-5xl text-4xl">Property Showcase</h1>
            </div>
            <PSCButtons/>
            <BuildingCardView/>
        </div>
    )
}
