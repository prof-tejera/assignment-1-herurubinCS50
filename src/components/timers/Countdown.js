import React from "react";
import { BarFill } from "../generic/bar-fill/bar-fill";
import { colors } from "../generic/color-data/colors";

class Countdown extends React.Component {
  render() {
    return (
      <BarFill
        label="Countdown"
        height="100px"
        width="50px"
        currentAmount={30}
        totalAmount={100}
        color={colors.green.rgb} />
    )
  }
}

export default Countdown;
