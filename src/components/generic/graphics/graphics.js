import React from "react";
import PropTypes from "prop-types";
import { colors } from "../color-data/colors";

export const graphicsLib = {
  startIcon : "startIcon",
  lapIcon : "lapIcon"
}


export class Graphics extends React.Component{

  graphic(){

  }


  render(){
    return(
      <></>
    )
  }

}

Graphics.propTypes = {
  graphicName : PropTypes.oneOf(graphicsLib.lapIcon, graphicsLib.startIcon),
  color : PropTypes.oneOf()
}