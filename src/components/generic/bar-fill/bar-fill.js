import React from "react";
import PropTypes from "prop-types";
import { colors } from "../color-data/colors";
import { buttonTypes } from "../button/button";


export class BarFill extends React.Component{

  fillLevel(){

    return `${(this.props.currentAmount / this.props.totalAmount) * 100}%`
  }

  render(){

    return(
      <div className="bar-fill"
      style={
        {
          width : `${this.props.width}`
        }
      }
      >
        <div className="bar-total"
          style={
            {
              height : `${this.props.height}`

            }
          }
        >
          <div className="bar"
            style={
            {
              height : `${this.fillLevel()}`,
              width : `100%`,
              background: `linear-gradient(180deg, rgba(${this.props.color},0.75) 0%, rgba(${this.props.color},0.2) 100%)`
              //background : `linear-gradient(180deg, rgba(${this.props.color},0.75) 0%, rgba(${this.props.color},0) 100%);`
            }
          }
              />
        </div>
      </div>
    )
  }
}

BarFill.propTypes = {
  width : PropTypes.string,
  height : PropTypes.string,
  color : PropTypes.oneOf( colors.buttonColors.activeFill.rgb, colors.dataStatusColors.red.rgb, colors.dataStatusColors.green.rgb, colors.dataStatusColors.yellow.rgb),
  totalAmount : PropTypes.number,
  currentAmount : PropTypes.number,
  label : PropTypes.string
}