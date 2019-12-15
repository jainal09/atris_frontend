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
  EuiFormControlLayout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiText
} from "@elastic/eui";
import { EuiHeaderSectionItem } from "@elastic/eui";
import HomeBody from "../components/HomeBody";

import { Link } from "@reach/router";
import ReportBody from "../components/ReportBody";
import { EuiIcon } from "@elastic/eui";
import { EuiFlyout } from "@elastic/eui";
import { EuiTreeView } from "@elastic/eui";
import TreeSelect from "../components/TreeSelect/TreeSelect";
 
export default class RecordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      meetingName: "My Awesome Meeting",
      isFlyoutVisible: false,
      isSwitchChecked: true
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

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked
    });
  };

  closeFlyout = () => {
    this.setState({ isFlyoutVisible: false });
  };

  showFlyout = () => {
    this.setState({ isFlyoutVisible: true });
  };

  entitySelectCallback = () => {};

  render() {
   
    let flyout;
    if (this.state.isFlyoutVisible) {
      flyout = (
        <EuiFlyout
          ownFocus
          onClose={this.closeFlyout}
          size="s"
          aria-labelledby="flyoutSmallTitle"
        >
          <EuiFlyoutHeader>
            <EuiTitle size="s">
              <h2 id="flyoutSmallTitle">Entity Selection</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiText>
              <p>
                Select the required entites to get an awesome visualization 😉
              </p>
            </EuiText>

            <div style={{ width: "20rem" }}>
            <TreeSelect/>
            </div>
          </EuiFlyoutBody>
        </EuiFlyout>
      );
    }
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
              <EuiPageContentHeaderSection>
                <EuiIcon
                  style={{}}
                  type="arrowLeft"
                  onClick={this.showFlyout}
                />
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              {flyout}
              <ReportBody />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
