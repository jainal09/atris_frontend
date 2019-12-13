import React, { Component } from "react";
import AtrisRecorder from "./AtrisRecorder/components";

export default class RecordBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AtrisRecorder />
      </div>
    );
  }
}
