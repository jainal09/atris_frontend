import React, { Component } from "react";

import {
  EuiPanel,
  EuiText,
  EuiBadge,
  EuiFlexItem,
  EuiFlexGroup
} from "@elastic/eui";
import AudioPlayer from "./AudioPlayer";

// import { IoMdCalendar } from "react-icons/io";
import { FiCalendar, FiClock } from "react-icons/fi";

import { EuiSpacer } from "@elastic/eui";

export default class HomeMeeting extends Component {
  render() {
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

    const { meetingTitle, meetingDate, duration, keyWords, summary, audioWaveform, audioURL} = this.props;
    return (
      <EuiPanel paddingSize="s">
        <EuiText>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    <h3>My first meeting {meetingTitle}</h3>
        </EuiText>
        <EuiSpacer size="xs" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <FiCalendar
            style={{
              height: "17px",
              width: "17px"
            }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          />
          <span style={{ marginLeft: "0.25rem" }}> {meetingDate} </span>
                                                                          
          <FiClock
            style={{
              height: "17px",
              width: "17px",
              marginLeft: "1.2rem"
            }}
          />
                                                                                                                            
          <span style={{ marginLeft: "0.25rem" }}> {duration} </span>
        </div>
        <EuiSpacer size="s" />                                                                                                                            
       <AudioPlayer audioWaveform={audioWaveform} audioURL={audioURL}/>  
       
        <EuiSpacer size="s" />

        <EuiFlexGroup wrap responsive={false} gutterSize="xs">
          {keyWords && badges.map((item, key) => (
            <EuiFlexItem grow={false} key={key}>
              <EuiBadge color={"#c7c7c7"}>{item ? item: null}</EuiBadge>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>

        <EuiSpacer size="s" />

        <EuiText>
          <p>
              {summary}
          </p>
        </EuiText>
      </EuiPanel>
    );
  }
}
