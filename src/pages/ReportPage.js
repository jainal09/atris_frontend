import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageContentBody,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  EuiImage,
  EuiTitle,
  EuiNavDrawerGroup,
  EuiNavDrawer,
  EuiHorizontalRule,
  EuiShowFor,
  EuiFocusTrap,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiText,
  EuiSpacer,
  EuiFormControlLayout
} from "@elastic/eui";
import { Link } from "@reach/router";
import AudioPlayer from "../components/AudioPlayer";
import HeaderUserMenu from "../components/header_user_menu.js";

import { FaHeart } from "react-icons/fa";

import ReportBody from "../components/ReportBody";
import TreeSelect from "../components/TreeSelect/TreeSelect";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      meetingName: "My Awesome Meeting",
      isFlyoutVisible: false,
      isSwitchChecked: true,
      annotateValue: [],
      checked: [],
      expanded: ["/ENTITIES/"],
      tree_node: []
    };

    this.nonExpandLinks = [
      {
        label: "like",
        iconType: "heart",
        isActive: true,
        extraAction: {
          alwaysShow: true
        }
      },
      {
        label: "share",
        iconType: "share",
        isActive: true,
        extraAction: {
          alwaysShow: true
        }
      }
    ];
  }

  ExpandLinks = [
    {
      label: "tasks",
      iconType: "list",
      flyoutMenu: {
        title: "My Recent Tasks",
        listItems: [
          {
            label: "Add Tasks",

            iconType: "listAdd"
          }
        ]
      }
    },
    {
      label: "notification",
      iconType: "bell",
      flyoutMenu: {
        title: "Lets see whats new",
        listItems: [
          {
            label: "You are awesome"
          }
        ]
      }
    },
    {
      label: "organize",
      iconType: "folderOpen",
      flyoutMenu: {
        title: "Lets Organize Your notes",
        listItems: [
          {
            label: "Soon to be added be patient"
          }
        ]
      }
    },
    {
      label: "Calendar",
      iconType: "calendar",
      flyoutMenu: {
        title: "Planning ahead is what the wise do.",
        listItems: [
          {
            label: "Soon to be added be patient"
          }
        ]
      }
    }
  ];

  renderLogo() {
    return <EuiHeaderLogo iconType="logoKibana" aria-label="Goes to home" />;
  }

  renderMenuTrigger = () => {
    return (
      <EuiHeaderSectionItemButton
        aria-label="Open nav"
        onClick={() => {
          console.log(this.navDrawerRef);

          if (this.navDrawerRef.state.flyoutIsCollapsed) {
            this.navDrawerRef.expandDrawer();
          } else {
            this.navDrawerRef.collapseDrawer();
          }
          console.log(this.navDrawerRef);
        }}
      >
        <EuiIcon type="apps" href="#" size="m" />
      </EuiHeaderSectionItemButton>
    );
  };

  getReportPageThis = () => {
    return this;
  };

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
    this.setState({ isFlyoutVisible: true }, () => {
      document.getElementsByClassName("euiOverlayMask")[0].style.background =
        "none";
    });
  };

  entitySelectCallback = () => {};

  setAnnotateValue = value => {
    this.setState({
      annotateValue: value
    });
  };

  componentDidMount() {
    document.getElementById("reportPageHeader").style.padding = "0";
  }

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
            <EuiSpacer size="m" />
            <div style={{ width: "20rem" }}>
              <TreeSelect
                setAnnotateValue={this.setAnnotateValue}
                annotateValue={this.state.annotateValue}
                getReportPageThis={this.getReportPageThis}
              />
            </div>
          </EuiFlyoutBody>
        </EuiFlyout>
      );
    }
    return (
      <>
        <div
          style={{
            // position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%"
          }}
        >
          <EuiPageHeader
            responsive={false}
            id="reportPageHeader"
            style={{
              position: "fixed",
              padding: "0 !important",
              top: "0",
              left: "0",
              right: "0",
              backgroundColor: "white",
              zIndex: "1"
            }}
          >
            <EuiPageHeaderSection>
              <EuiShowFor sizes={["xs", "s"]}>
                <EuiHeaderSectionItem
                  border="right"
                  style={{
                    display: "flex !important",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {this.renderMenuTrigger()}
                  {this.renderLogo()} Atris
                </EuiHeaderSectionItem>
              </EuiShowFor>

              <EuiShowFor sizes={["m", "l", "xl"]}>
                <EuiHeaderSectionItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {this.renderLogo()}
                    <Link to="/" style={{ marginLeft: "8px" }}>
                      <EuiTitle size="l">
                        <h1>Atris</h1>
                      </EuiTitle>
                    </Link>
                  </div>
                </EuiHeaderSectionItem>
              </EuiShowFor>
            </EuiPageHeaderSection>

            <EuiHeaderSection side="right">
              <EuiHeaderSectionItem>
                <HeaderUserMenu />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiPageHeader>
          <EuiNavDrawer
            ref={ref => {
              this.navDrawerRef = ref;
            }}
            showExpandButton={true}
          >
            <EuiNavDrawerGroup listItems={this.nonExpandLinks} />
            <EuiHorizontalRule margin="none" />
            <EuiNavDrawerGroup listItems={this.ExpandLinks} />
          </EuiNavDrawer>
          <EuiPage className="euiNavDrawerPage">
            <EuiPageBody className="euiNavDrawerPage__pageBody">
              <EuiPageHeader>
                <EuiPageHeaderSection
                  style={{
                    width: "100%",
                    marginTop: "40px"
                  }}
                >
                  {/* <EuiTitle size="l">
                    <h1>Page title</h1>
                  </EuiTitle> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "8px"
                    }}
                  >
                    <EuiIcon
                      style={{}}
                      type="arrowLeft"
                      onClick={this.showFlyout}
                    />
                  </div>
                  <AudioPlayer />
                </EuiPageHeaderSection>
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
                  {flyout}
                  <ReportBody annotateValue={this.state.annotateValue} />
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
