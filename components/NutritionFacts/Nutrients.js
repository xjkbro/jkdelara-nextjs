// export const styles = {
//   root: {
//     textAlign: 'left',
//     marginTop: 6
//   },
//   headline: {
//     fontSize: props => props.headlineSize,
//     fontWeight: 800,
//     borderBottom: '1px solid black'
//   },
//   calorieSummary: {
//     display: 'flex',
//     flexFlow: 'row nowrap',
//     justifyContent: 'space-between',
//     borderBottom: '3px solid black',
//     fontSize: props => props.calorieSummarySize,
//     whiteSpace: 'nowrap',
//     '& > span:first-of-type': {
//       marginRight: 8
//     }
//   },
//   periodIndication: {
//     fontSize: 11,
//     textAlign: 'right',
//     marginTop: 3
//   },
//   nutrients: {
//     marginTop: 6,
//     borderBottom: '5px solid black',
//     '& ul': {
//       listStyleType: 'none',
//       margin: 0,
//       padding: 0,
//       '& ul': {
//         paddingLeft: 8
//       }
//     },
//     '& li': {
//       borderTop: '1px solid black'
//     }
//   },
//   attribute: {
//     fontWeight: 800
//   }
// };

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

// Nutrients.defaultProps = {
//   headlineSize: 13,
//   calorieSummarySize: 14
// };
