import React from "react";
import PropTypes from "prop-types";
import { GraphicsLibItem, graphicsLib } from "../graphics/graphicsLibItem";


export const buttonTypes = {
  link : "link",
  action : "action",
  disabled : "disabled"
}

export class Button extends React.Component{

  buttonType(){
    switch (this.props.buttonType){
      case buttonTypes.link:
        return (<a className="button link" href={this.props.linkTo}>{this.props.label}</a>);

      case buttonTypes.disabled:
        return (<div className="button disabled">{this.props.label}</div>);

      case buttonTypes.action:
        return (
          <button
            className="button action"
            style={
              {
                width : `${this.props.buttonWidth}`
              }
            }
          >
            {this.props.label}
            <GraphicsLibItem width="1.5rem" height="3rem" graphicName={this.props.icon} />
          </button>
        )

      default:

    }

  }

  render() {
    return(this.buttonType())
  }
}

Button.propTypes = {
  buttonWidth : PropTypes.string,
  buttonAction : PropTypes.func,
  linkTo : PropTypes.string,
  label : PropTypes.string,
  buttonType : PropTypes.oneOf([buttonTypes.action, buttonTypes.link, buttonTypes.disabled]),
  icon : PropTypes.oneOf([graphicsLib.startIcon, graphicsLib.lapIcon]),
  iconHeight : PropTypes.string,
  iconWidth : PropTypes.string
}