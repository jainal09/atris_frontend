import React, { Component } from "react";
import AtrisRecorder from "./AtrisRecorder/components";
import { EuiSpacer } from "@elastic/eui";
import { EuiText } from "@elastic/eui";

export default class RecordBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AtrisRecorder />

        <EuiSpacer size="l" />

        <EuiText> The transcribe of firt speech by atris hello world </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        <EuiText style={{marginTop:"8px"}}>
          I watched C-beams glitter in the dark near the Tannhäuser Gate All
          those moments will be lost in time, like tears in rain. Time to die.
        </EuiText>

        
      </div>
    );
  }
}
