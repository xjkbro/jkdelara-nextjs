import { Fragment } from "react";
export const styles = {
    root: {},
    table: {
        width: "100%",
        fontStyle: 14,
        borderCollapse: "collapse",
        "& tr": {
            borderBottom: "1px solid black",
        },
        "& tr > td": {
            textAlign: "center",
            "&:first-of-type": {
                textAlign: "left",
            },
            "&:last-of-type": {
                textAlign: "right",
            },
        },
    },
    footNotes: {
        fontSize: 11,
        textAlign: "left",
        marginTop: 3,
    },
};

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
