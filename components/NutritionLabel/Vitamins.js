import { Fragment } from "react";
export default function Vitamins(props) {
    const { collection } = props;

    return (
        <div className="">
            <table className="w-full text-[14px] border-collapse">
                <tbody>
                    {collection.map((columns, idx) => (
                        <tr
                            key={idx.toString()}
                            className="border-b border-b-black"
                        >
                            {columns.map((column, idx) => (
                                <Fragment key={idx.toString()}>
                                    <td class="text-center first:text-left last:text-right">
                                        {column}
                                    </td>
                                    {idx + 1 !== columns.length && (
                                        <td>&#x25cf;</td>
                                    )}
                                </Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-[11px] text-left mt-[3px]">
                * Percentage Daily Values are based on a 2,000 calorie diet.
                Your Daily Values may be higher or lower depending on your
                calorie needs.
            </div>
        </div>
    );
}
