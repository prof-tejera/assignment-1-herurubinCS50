import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import { BarFill } from "../components/generic/bar-fill/bar-fill";
import { colors } from "../components/generic/color-data/colors";
import { graphicsLib } from "../components/generic/graphics/graphicsLibItem";
import { Button, buttonTypes } from "../components/generic/button/button";
import { Readout } from "../components/generic/numerical-readout/readout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Button "
            component={<Button
              buttonWidth="100px"
              icon={graphicsLib.startIcon}
              label={"START"}
              buttonType={buttonTypes.action}
            />}
            propDocs={[
              {
                prop: "buttonWidth",
                description: "Changes the width",
                type: "string",
                defaultValue: "medium",
              },
              {
                prop: "buttonAction",
                description: "pass a function for button to do when clicking",
                type: "string",
                defaultValue: "medium",
              },
              {
                prop: "linkTo",
                description: "if it's a webline pass an url",
                type: "string",
                defaultValue: "medium",
              },
              {
                prop: "label",
                description: "text to display on button/link",
                type: "string",
                defaultValue: "medium",
              },
              {
                prop: "buttonType",
                description: "if you want disabled, active or weblink",
                type: "one of those specific button types as defined in buttonTypes object",
                defaultValue: "medium",
              },
              {
                prop: "icon",
                description: "pass a graphic from the GraphicsLib component",
                type: "one of those specific button types as defined in graphicsLib object",
                defaultValue: "medium",
              },
              {
                prop: "iconHeight",
                description: "set height of icon",
                type: "string, any valid css dimension",
                defaultValue: "medium",
              },
              {
                prop: "iconWidth",
                description: "set width of icon",
                type: "string, any valid css dimension",
                defaultValue: "medium",
              },
            ]}
          />

          <DocumentComponent
            title="BarFill"
            component={<BarFill label={"Data"}
                                color={colors.dataStatusColors.red.rgb}
                                currentAmount={22}
                                totalAmount={100} width="2rem" height="4rem"

            />}
            propDocs={[
              {
                prop: "width",
                description: "set the width, any valid css dimension",
                type: "string",
                defaultValue: "null",
              },
              {
                prop: "height",
                description: "set the height, any valid css dimension",
                type: "string",
                defaultValue: "null, optional",
              },
              {
                prop: "color",
                description: "set the color from list of valid colors in colors.js, any valid css dimension",
                type: "string",
                defaultValue: "null, optional",
              },
              {
                prop: "totalAmount",
                description: "total size of bucket, max value",
                type: "string",
                defaultValue: "null, optional",
              },
              {
                prop: "currentAmount",
                description: "current amount, manage this with logic external to component, component just responsible fo rendering data display",
                type: "string",
                defaultValue: "null, optional",
              }
            ]}
          />
        </div>
        <DocumentComponent
          title="Numerical Readout "
          component={<Readout fontSize="3rem" width="250px" hours="00" minutes="04" seconds="32" />}
          propDocs={[
            {
              prop: "fontSize",
              description: "Changes the font size of numericals",
              type: "string, any valid css dimension",
              defaultValue: "medium",
            },
            {
              prop: "width",
              description: "width of outermost readout container",
              type: "string, any valid css dimension",
              defaultValue: "medium",
            },
            {
              prop: "hours",
              description: "number of hours to display (calculate outside and pass in)",
              type: "string, any valid css dimension",
              defaultValue: "medium",
            },
            {
              prop: "minutes",
              description: "number of minutes to display (calculate outside and pass in)",
              type: "string, any valid css dimension",
              defaultValue: "medium",
            },
            {
              prop: "seconds",
              description: "number of seconds to display (calculate outside and pass in)",
              type: "string, any valid css dimension",
              defaultValue: "medium",
            },
          ]}
        />

      </Container>
    );
  }
}

export default Documentation;
