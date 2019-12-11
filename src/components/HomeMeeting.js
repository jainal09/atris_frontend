import React, { Component } from "react";

import { EuiPanel, EuiText } from "@elastic/eui";
import AudioPlayer from "./AudioPlayer";

export default class HomeMeeting extends Component {
  render() {
    return (
      <EuiPanel paddingSize="s">
        <EuiText>
          <h3>My first meeting</h3>
        </EuiText>
        <AudioPlayer />
        <EuiText>
          <p>
            This planet has - or rather had - a problem, which was this: most of
            the people living on it were unhappy for pretty much of the time.
            Many solutions were suggested for this problem, but most of these
            were largely concerned with the movements of small green pieces of
            paper, which is odd because on the whole it was not the small green
            pieces of paper that were unhappy.
          </p>
        </EuiText>
      </EuiPanel>
    );
  }
}
