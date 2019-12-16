import React, { Component } from "react";
import AtrisRecorder from "./AtrisRecorder/components";
import { EuiSpacer } from "@elastic/eui";
import { EuiText } from "@elastic/eui";
import { navigate } from "@reach/router";
import { TextAnnotator } from "react-text-annotate";

import AudioPlayer from "./AudioPlayer";

const TEXT =
  "When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education startup Udacity, in an interview with Recode earlier this week. A little less than a decade later, dozens of self-driving startups have cropped up while automakers around the world clamor, wallet in hand, to secure their place in the fast-moving world of fully automated transportation.";
const TAG_COLORS = {
  ORG: "#00ffa2",
  PERSON: "#84d2ff"
};

export default class ReportBody extends Component {
  state = {
    value: this.props.annotateValue,
    tag: "default tag"
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <AudioPlayer />
        <EuiSpacer size="l" />
        <EuiText> The transcribe of firt speech by atris hello world </EuiText>
        <EuiText style={{ marginTop: "8px" }}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>
        <TextAnnotator
          style={{
            // fontFamily: "IBM Plex Sans",
            // maxWidth: 500,
            lineHeight: 1.5
          }}
          content={TEXT}
          value={this.state.value}
          onChange={this.handleChange}
          getSpan={span => ({
            ...span,
            tag: this.state.tag,
            color: TAG_COLORS[this.state.tag]
          })}
        />
      </div>
    );
  }
}
