import React from "react";
import { Button } from "../../generic/button/button";
import { buttonTypes } from "../../generic/button/button";
import { Readout } from "../../generic/numerical-readout/readout";
import { graphicsLib } from "../../generic/graphics/graphicsLibItem";


class Stopwatch extends React.Component {
  render() {
    return (

      <div>
        <div>
          <Readout fontSize="3rem" width="250px" hours="00" minutes="04" seconds="32" />
        </div>
        <div className="controls">
          <Button
            buttonWidth="100px"
            icon={graphicsLib.lapIcon}
            label={"LAP"}
            buttonType={buttonTypes.action} />
          <Button
            buttonWidth="100px"
            icon={graphicsLib.startIcon}
            label={"START"}
            buttonType={buttonTypes.action}
          />
        </div>
      </div>
      )
  }
}

export default Stopwatch;
