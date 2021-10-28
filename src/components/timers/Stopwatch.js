import React from "react";
import { Button } from "../generic/button/button";
import { buttonTypes } from "../generic/button/button";

class Stopwatch extends React.Component {
  render() {
    return (

      <div>
        <Button label={"Stop"} buttonType={buttonTypes.action}  />
        <Button label={"Start"} buttonType={buttonTypes.action}  />
      </div>
      )
  }
}

export default Stopwatch;
