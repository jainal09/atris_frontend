import React, { Component } from "react";

import moment from "moment";

import { EuiDatePicker, EuiFormRow, EuiHorizontalRule } from "@elastic/eui";
import HomeMeeting from "./HomeMeeting";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <EuiFormRow label="Select a date">
          <EuiDatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </EuiFormRow>
        <EuiHorizontalRule />
        <HomeMeeting/>
      </div>
    );
  }
}
