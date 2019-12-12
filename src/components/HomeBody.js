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
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiFilePicker
} from "@elastic/eui";
import HomeMeeting from "./HomeMeeting";

import { FiPlusCircle } from "react-icons/fi";
import { EuiText } from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

export default class HomeBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      isModalVisible: false,
      files: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onChangeFile = files => {
    this.setState({
      files: files
    });
    console.log("dropped file", files);
  };

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
                <EuiFlexItem>
                  <EuiFlexItem key={1}>
                    <EuiCard
                      icon={<EuiIcon size="xxl" type="notebookApp" />}
                      title={`Start Meeting`}
                      isDisabled={false}
                      description="Click to start Meeting and being Awesome."
                      onClick={() => window.alert("Card clicked")}
                    />
                  </EuiFlexItem>
                </EuiFlexItem>
                <EuiFlexItem grow={true}>
                  <EuiFilePicker
                    id="asdf2"
                    multiple
                    initialPromptText={
                      <>
                      <EuiText>
                       
                       <h4> Drop file to get transcribe</h4>
                     </EuiText>

                     <EuiSpacer size='sm'/>
                     <h6> Get awesome transcibe and analysis from audio</h6>
                      </>

                    }
                    onChange={files => {
                      this.onChangeFile(files);
                    }}
                    display="large"
                  />
                </EuiFlexItem>
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
