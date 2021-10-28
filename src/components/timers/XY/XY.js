import React from "react";
import PropTypes, { number } from "prop-types";
import { BarFill } from "../../generic/bar-fill/bar-fill";
import { Readout } from "../../generic/numerical-readout/readout";
import { colors } from "../../generic/color-data/colors";

class XY extends React.Component {

  //these displays would be managed by state for the final working version
  roundTicks(){
    let rounds = [];

    for(let i=0; i < this.props.rounds; i++){
      rounds.push(
        <BarFill
          width="auto"
          height="1rem"
          color={colors.buttonColors.activeFill.rgb}
          totalAmount={this.props.secondsPerRound[i]}
          currentAmount={this.props.currentRoundTime[i]} />)
    }

    return rounds;
  }

  render() {
    return (
      <div className="xy">
        <div className="rounds-display">
          {this.roundTicks()}
        </div>
        <Readout width="auto" minutes="00" seconds="32" hours="00" fontSize="3rem" />
      </div>
    )
  }
}

XY.propTypes ={
  rounds : PropTypes.number,
  secondsPerRound : PropTypes.arrayOf(number),
  currentRoundTime : PropTypes.arrayOf(number)
}

export default XY;
