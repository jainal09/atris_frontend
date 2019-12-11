import React, { Component } from "react";

import moment from "moment";

import {
  EuiDatePicker,
  EuiFormRow,
  EuiHorizontalRule,

  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiFlexGroup, EuiFlexItem

} from "@elastic/eui";
import HomeMeeting from "./HomeMeeting";

import { FiPlusCircle } from "react-icons/fi";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      isModalVisible: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  render() {
    let modal;

    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={this.closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>What to do ?</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
            <EuiFlexGroup>
  <EuiFlexItem>Start New meeting</EuiFlexItem>
  <EuiFlexItem>Upload file</EuiFlexItem>
</EuiFlexGroup> 
            </EuiModalBody>

            {/* <EuiModalFooter>
              <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={this.closeModal} fill>
                Save
              </EuiButton>
            </EuiModalFooter> */}
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    return (
      <div>
        <EuiFormRow label="Select a date">
          <EuiDatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="Do MMM YYYY"
          />
        </EuiFormRow>
        {modal}
        <EuiHorizontalRule />
        <HomeMeeting />

        <FiPlusCircle
          onClick={this.showModal}
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            height: "40px",
            width: "40px",
            zIndex: "5"
          }}
        />
      </div>
    );
  }
}
