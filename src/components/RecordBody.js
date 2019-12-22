import React, { Component } from "react";
import AtrisRecorder from "./AtrisRecorder/components";
import { EuiSpacer } from "@elastic/eui";
import {
  EuiText,
  EuiPanel,
  EuiFlexItem,
  EuiFlexGroup,
  EuiBadge,
  EuiAvatar
} from "@elastic/eui";
import { navigate } from "@reach/router";

const badges = [
  "default",
  "hollow",
  "primary",
  "secondary",
  "accent",
  "warning",
  "danger",
  "#000",
  "#fea27f"
];

const speakers = [
  "default",
  "hollow",
  "primary",
  "secondary",
  "accent",
  "warning",
  "danger",
  "#000",
  "#fea27f"
];
export default class RecordBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AtrisRecorder
          routeFxn={() => {
            // navigate("report");
          }}
        />

        {/* <EuiText> The transcribe of firt speech by atris hello world </EuiText>

        <EuiText style={{ marginTop: "8px" }}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText> */}

        <EuiPanel
          style={{
            marginTop: "8px"
          }}
        >
          <div> 00:00 - 00:10 </div>
          <EuiFlexGroup
            wrap
            responsive={false}
            gutterSize="xs"
            style={{ marginTop: "8px" }}
          >
            {speakers.map(speaker => (
              <EuiFlexItem grow={false} key={speaker}>
                <EuiAvatar size="m" name={speaker} />
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
          <EuiText>
            I watched C-beams glitter in the dark near the Tannhäuser Gate All
            those moments will be lost in time, like tears in rain. Time to die
            in hell for gods sake.
          </EuiText>
          <EuiFlexGroup wrap responsive={false} gutterSize="xs">
            {badges.map(badge => (
              <EuiFlexItem grow={false} key={badge}>
                <EuiBadge color={"#c7c7c7"}>{badge}</EuiBadge>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiPanel>

        <EuiPanel
          style={{
            marginTop: "8px"
          }}
        >
          <div> 00:10 - 00:20</div>
          <EuiText style={{ marginTop: "8px" }}>
            I watched C-beams glitter in the dark near the Tannhäuser Gate All
            those moments will be lost in time, like tears in rain. Time to die
            in hell for gods sake.
          </EuiText>
          <EuiFlexGroup wrap responsive={false} gutterSize="xs">
            {badges.map(badge => (
              <EuiFlexItem grow={false} key={badge}>
                <EuiBadge color={"#c7c7c7"}>{badge}</EuiBadge>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiPanel>
      </div>
    );
  }
}
