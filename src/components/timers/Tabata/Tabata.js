import React from "react";
import { BarFill } from "../../generic/bar-fill/bar-fill";
import { colors } from "../../generic/color-data/colors";
import { Readout } from "../../generic/numerical-readout/readout";
import PropTypes, { number } from "prop-types";


class Tabata extends React.Component {

  //these displays would be managed by state for the final working version
  intervalTicks(){
    let rounds = [];

    for(let i=0; i < this.props.intervals; i++){
      rounds.push(
        <div key={i} className="interval">
          <BarFill
            width="auto"
            height="1rem"
            color={colors.dataStatusColors.green.rgb}
            totalAmount={this.props.secondsPerActiveRound[i]}
            currentAmount={this.props.currentActiveRoundTime[i]}
          />
          <BarFill
            width="auto"
            height="1rem"
            color={colors.dataStatusColors.green.rgb}
            totalAmount={this.props.secondsPerRestRound[i]}
            currentAmount={this.props.currentRestRoundTime[i]}
          />
        </div>
      )
    }

    return rounds;
  }

  render() {
    return (
      <div className="tabata">
        <div className="intervals-display">
          {this.intervalTicks()}
        </div>
        <Readout width="auto" minutes="00" seconds="32" hours="00" fontSize="3rem" />
      </div>
    )
  }
}

Tabata.propTypes ={
  intervals : PropTypes.number,
  secondsPerActiveRound : PropTypes.arrayOf(number),
  secondsPerRestRound : PropTypes.arrayOf(number),
  currentActiveRoundTime : PropTypes.arrayOf(number),
  currentRestRoundTime : PropTypes.arrayOf(number)
}

export default Tabata;
