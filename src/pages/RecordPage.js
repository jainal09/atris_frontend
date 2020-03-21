import React, { Component } from "react";

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiAvatar,
  EuiFieldSearch,
  EuiHeaderSection,
  EuiSpacer,
  EuiFormControlLayout
} from "@elastic/eui";
import { EuiHeaderSectionItem } from "@elastic/eui";
import HomeBody from "../components/HomeBody";

import { FiPlusCircle } from "react-icons/fi";
import { Link } from "@reach/router";
import RecordBody from "../components/RecordBody";

export default class ReportPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      meetingName: "My Awesome Meeting"
    };
  }

  searchValueChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleMeetingNameChange = e => {
    this.setState({
      meetingName: e.target.value
    });
  };

  render() {
    return (
      <EuiPage style={{ height: "100vh" }}>
        {/* <EuiPageSideBar>SideBar nav</EuiPageSideBar> */}
        <EuiPageBody>
          <EuiPageHeader responsive={false}>
            <EuiPageHeaderSection>
              <Link to="/">
                <EuiTitle size="l">
                  <h1>Atris</h1>
                </EuiTitle>
              </Link>
            </EuiPageHeaderSection>
            <EuiHeaderSection side="right">
              <EuiAvatar
                size="l"
                name="Cat"
                imageUrl="https://source.unsplash.com/64x64/?cat"
              />
            </EuiHeaderSection>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiFormControlLayout icon="pencil">
                  <input
                    type="text"
                    placeholder="Please Add Meeting Name"
                    value={this.state.meetingName}
                    onChange={this.handleMeetingNameChange}
                    className="euiFieldText"
                    style={{
                      paddingLeft: "32px",
                      // color: "#1a1c21",
                      fontSize: "1.75rem",
                      fontWeight: "100",
                      letterSpacing: "-0.04em",
                      fontFamily: "inherit",
                      boxShadow: "none"
                    }}
                  />
                </EuiFormControlLayout>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <RecordBody 
          //     meetingID={this.props.meetingID}
          // groupID={this.props.groupID} 
          />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
