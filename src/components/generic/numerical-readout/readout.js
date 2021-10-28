import React from "react";
import PropTypes from "prop-types";
import { colors } from "../color-data/colors";

export class Readout extends React.Component{


  //time status would be handled by state management in fully functional component
  render(){
    return(
      <div className="readout"
           style={{
            width : `${this.props.width}`,
             fontSize : `${this.props.fontSize}`
          }
           }>
        <div className="hours">
          {this.props.hours}
        </div>
        <div className="divider">
          :
        </div>
        <div className="minutes">
          {this.props.minutes}
        </div>
        :
        <div className="seconds">
          {this.props.seconds}
        </div>
      </div>
    )
  }
}

Readout.propTypes = {
  fontSize : PropTypes.string,
  width : PropTypes.string,
  hours : PropTypes.string,
  minutes : PropTypes.string,
  seconds : PropTypes.string
}