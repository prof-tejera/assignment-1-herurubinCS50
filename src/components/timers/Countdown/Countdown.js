import React from "react";
import { BarFill } from "../../generic/bar-fill/bar-fill";
import { colors } from "../../generic/color-data/colors";
import { Readout } from "../../generic/numerical-readout/readout";

class Countdown extends React.Component {
  render() {
    return (
      <div className="countdown">

        <BarFill
          label="Countdown"
          height="100px"
          width="50px"
          currentAmount={30}
          totalAmount={100}
          color={colors.dataStatusColors.green.rgb} />

        <div className="counter-display">
          <h2>TIME REMAINING:</h2>
          <Readout
            width="250px"
            hours="00"
            minutes="04"
            seconds="32" />
        </div>
      </div>
    )
  }
}

export default Countdown;
