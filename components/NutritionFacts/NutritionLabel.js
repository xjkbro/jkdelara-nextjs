import Header from "./Header";
import Nutrients from "./Nutrients";
import Vitamins from "./Vitamins";

export const styles = {
    root: {
        display: "flex",
        flexFlow: "column",
        padding: 3,
        backgroundColor: "white",
        border: "1px solid black",
        boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.25)",
        fontFamily: "Libre Franklin, sans-serif",
    },
    attribute: {
        fontWeight: 800,
    },
    italic: {
        fontStyle: "italic",
    },
};

export default function NutritionLabel(props) {
    const {
        classes,
        servingSize,
        servingsPerContainer,
        calories,
        totalFat,
        saturatedFat,
        transFat,
        cholesterol,
        sodium,
        totalCarbs,
        dietaryFiber,
        sugars,
        protein,
        vitaminA,
        vitaminC,
        calcium,
        iron,
    } = props;

    return (
        <div className="flex flex-col p-[3px] w-[300px] text-black bg-white border border-black shadow-md">
            <Header
                servingSize={servingSize}
                servingsPerContainer={servingsPerContainer}
            />

            <Nutrients calories={calories} caloriesFromFat={totalFat * 9}>
                <ul className="list-none m-0 p-0">
                    <li className="border-t border-t-black">
                        <b className="font-bolder">Total Fat</b> {totalFat}g
                        <ul className="pl-[8px]">
                            <li className="border-t border-t-black">
                                Saturated Fat {saturatedFat}g
                            </li>
                            <li className="border-t border-t-black">
                                Trans Fat {transFat}g
                            </li>
                        </ul>
                    </li>
                    <li className="border-t border-t-black">
                        <b className="font-bolder">Cholesterol</b> {cholesterol}
                        mg
                    </li>
                    <li className="border-t border-t-black">
                        <b className="font-bolder">Sodium</b> {sodium}mg
                    </li>
                    <li className="border-t border-t-black">
                        <b className="font-bolder">Total Carbohydrates</b>{" "}
                        {totalCarbs}g
                        <ul className="pl-[8px]">
                            <li className="border-t border-t-black">
                                Dietary Fiber {dietaryFiber}g
                            </li>
                            <li className="border-t border-t-black">
                                Sugars {sugars}g
                            </li>
                        </ul>
                    </li>
                    <li className="border-t border-t-black">
                        <b className="font-bolder">Protein</b> {protein}g
                    </li>
                </ul>
            </Nutrients>
            <Vitamins
                collection={[
                    [`Vitamin A ${vitaminA}%`, `Vitamin C ${vitaminC}%`],
                    [`Calcium ${calcium}%`, `Iron ${iron}%`],
                ]}
            />
        </div>
    );
}
