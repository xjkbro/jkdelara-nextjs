import { Libre_Franklin } from "@next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"] });
export const styles = {
    root: {
        borderBottomStyle: "solid",
        borderBottomColor: "black",
        borderBottomWidth: (props) => props.borderWidth,
        textAlign: "left",
    },
    headline: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        fontSize: (props) => props.headlineSize,
        fontWeight: 800,
        "& > span:first-of-type": {
            marginRight: 8,
        },
    },
    servingSummary: {
        fontSize: (props) => props.servingSummarySize,
    },
};

export default function Header(props) {
    const { classes, servingSize, servingsPerContainer } = props;

    return (
        <div className="border-b-[8px] border-black text-left">
            <div
                className={
                    "flex flex-row flex-nowrap justify-between text-[38px] font-black " +
                    libre.className
                }
            >
                <span className="mr-[8px]">Nutrition</span>
                <span>Facts</span>
            </div>
            <div className="text-[14px]">
                {typeof servingSize !== "undefined" && (
                    <div>{`Serving Size ${servingSize}`}</div>
                )}
                {typeof servingsPerContainer !== "undefined" && (
                    <div>{`Serving Size ${servingsPerContainer}`}</div>
                )}
            </div>
        </div>
    );
}

Header.defaultProps = {
    headlineSize: 38,
    servingSummarySize: 14,
    borderWidth: 8,
};
