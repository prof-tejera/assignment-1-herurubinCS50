import React from "react";
import PropTypes from "prop-types";


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
        return (<button className="button action">{this.props.label}</button>)

      default:

    }

  }

  render() {
    return(this.buttonType())
  }
}

Button.propTypes = {
  buttonAction : PropTypes.func,
  linkTo : PropTypes.string,
  label : PropTypes.string,
  buttonType : PropTypes.oneOf([buttonTypes.action, buttonTypes.link, buttonTypes.disabled])
}