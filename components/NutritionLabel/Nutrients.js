export default function Nutrients(props) {
    const { classes, calories, caloriesFromFat, children } = props;

    return (
        <div className="text-left mt-[6px]">
            <div className="text-[13px] font-bolder border-b border-black">
                Amount Per Serving
            </div>
            <div className="flex flex-row flex-nowrap justify-between border-b-[3px] border-black text-[14px] whitespace-nowrap">
                <span className="mr-[8px]">
                    <b className="font-bolder">Calories</b> {calories}
                </span>
                <span>{`Calories from Fat ${caloriesFromFat}`}</span>
            </div>
            <div className="text-[11px] text-right mt-[3px]">
                % Daily Value*
            </div>
            <div className="mt-[6px] border-black border-b-[5px]">
                {children}
            </div>
        </div>
    );
}
