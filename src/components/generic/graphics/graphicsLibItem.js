import React from "react";
import PropTypes from "prop-types";
import { colors } from "../color-data/colors";

export const graphicsLib = {
  startIcon : "startIcon",
  lapIcon : "lapIcon"
}


export class GraphicsLibItem extends React.Component{

  graphic(){
    switch (this.props.graphicName){
      case graphicsLib.lapIcon:
        return (
          <svg width="100%" height="100%" viewBox="0 0 46 62" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-386.000000, -813.000000)">
                <g id="Group" transform="translate(387.000000, 814.000000)">
                  <rect id="Rectangle" fill="#FFFFFF" x="2.27373675e-13" y="0" width="40" height="60" rx="20"></rect>
                  <path d="M0,23.2931955 L0,19.8551016 C0,8.88938984 8.95422626,0 19.9999185,0 L19.9999185,0 C31.0456107,0 40,8.88938984 40,19.8551016 L40,35" id="Stroke-1" stroke="#EF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M40,38.6510339 L40,43.7912657 C38.1751753,53.0307738 29.9996708,60 20.1900859,60 C9.03936671,60 0,50.9947833 0,39.8861905 L0,27" id="Stroke-5" stroke="#EF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1,4.96"></path>
                  <polygon id="Stroke-9" fill="#EF8C00" points="45 31 39.6875 36 34.375 31"></polygon>
                  <polygon id="Fill-11" fill="#EF8C00" points="31 29.3597757 21.6402243 29.3597757 21.6402243 20 18.3597757 20 18.3597757 29.3597757 9 29.3597757 9 32.6402243 18.3597757 32.6402243 18.3597757 42 21.6402243 42 21.6402243 32.6402243 31 32.6402243"></polygon>
                </g>
              </g>
            </g>
          </svg>
        )

      case graphicsLib.startIcon:
        return(
          <svg width="100%" height="100%" viewBox="0 0 42 61" version="1.1" >
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop-HD" transform="translate(-633.000000, -813.000000)">
                <g id="Group-2" transform="translate(634.000000, 814.000000)">
                  <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="40" height="60" rx="20"></rect>
                  <path d="M40,19.918546 C40,8.91779472 31.0457737,0 20.0000815,0 L19.9999185,0 C8.95438928,0 0,8.91779472 0,19.918546 L0,39.081454 C0,50.0822053 8.95438928,59 19.9999185,59 L20.0000815,59 C31.0457737,59 40,50.0822053 40,39.081454 L40,19.918546 Z" id="Stroke-13" stroke="#EF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <polyline id="Stroke-15" stroke="#EF8C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="18 23 26 31.5 18 40"></polyline>
                </g>
              </g>
            </g>
          </svg>
        )

      default:
        return null;
    }
  }


  render(){
    return(
      <div
        className="icon"
        style={
          {
          width : `${this.props.width}`,
          height : `${this.props.height}`
        }
        }>
        {this.graphic()}
      </div>
    )
  }

}

GraphicsLibItem.propTypes = {
  graphicName : PropTypes.oneOf(graphicsLib.lapIcon, graphicsLib.startIcon),
  color : PropTypes.oneOf(),
  height : PropTypes.string,
  width : PropTypes.string
}