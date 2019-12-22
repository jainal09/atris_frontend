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
 "1"
];
export default class RecordBody extends Component {
  state = {
    transcribeData: []
  };

  setTranscribeData = data => {
    this.setState({
      transcribeData: data
    });
  };

  render() {
    let temp = [
      {
        segment: 1,
        sounds: {
          result: [
            {
              labels: "Speech",
              probability: 0.5788897275924683
            }
          ]
        }
      },
      {
        segment: 1,
        text:
          "This is the some sample recording, which I am touched right now, I speak let's see how it would be additional."
      },
      {
        segment: 2,
        sounds: {
          result: [
            {
              labels: "Speech",
              probability: 0.6222794651985168
            }
          ]
        }
      },
      {
        segment: 2,
        text: "Swedish recordings 123 equals when I check my free book by 678."
      }
    ];

    let textData = [];
    textData = this.state.transcribeData.filter(elem => {
      return elem.hasOwnProperty("text");
    });

    textData = textData.sort((a, b) => a.segment - b.segment);

    let audioData = [];
    audioData = this.state.transcribeData.filter(elem => {
      return elem.hasOwnProperty("sounds");
    });

    // console.log(textData, audioData, "xxa");

    return (
      <div>
        <AtrisRecorder
          setTranscribeData={this.setTranscribeData}
          routeFxn={() => {
            // navigate("report");
          }}
        />

        {/* <EuiText> The transcribe of firt speech by atris hello world </EuiText>

        <EuiText style={{ marginTop: "8px" }}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText> */}

        {textData.map((data, index) => {
          return (
            <EuiPanel
              style={{
                marginTop: "8px"
              }}
              key={index}
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
              <EuiText>{data.text}</EuiText>
              <EuiFlexGroup wrap responsive={false} gutterSize="xs">
                {/* {badges.map(badge => (
                  <EuiFlexItem grow={false} key={badge}>
                    <EuiBadge color={"#c7c7c7"}>{badge}</EuiBadge>
                  </EuiFlexItem>
                ))} */}

              
                {audioData[index].sounds.result.map(elem => {
                  return (
                    <EuiFlexItem grow={false} key={elem.labels}>
                      <EuiBadge color={"#c7c7c7"}>{elem.labels}</EuiBadge>
                    </EuiFlexItem>
                  );
                })}
              </EuiFlexGroup>
            </EuiPanel>
          );
        })}
      </div>
    );
  }
}
