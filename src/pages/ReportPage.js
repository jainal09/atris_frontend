import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import ReactPDF from "@react-pdf/renderer";
import axios from "axios";

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
  EuiFormControlLayout,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBadge,
  EuiSwitch
} from "@elastic/eui";
import { Link } from "@reach/router";
import AudioPlayer from "../components/AudioPlayer";
import HeaderUserMenu from "../components/header_user_menu.js";

import { FaHeart } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";

import ReportBody from "../components/ReportBody";
import TreeSelect from "../components/TreeSelect/TreeSelect";
import { EuiPanel } from "@elastic/eui";

const BASE_URL = "http://127.0.0.1:8000/";

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

let ApiRes = {
  fullText:
    " How you doing? From 3.49% to 1.49%, resulting in a Bitcoin Price in India equal to Global Giants. Bring the occasion of Diwali, the Indian Festival of wealth. Kesha opened its door for its Indian customers to provide avalit enabling. Buy and sell Cryptocurrencies Kesha was able to deliver smooth and secure customer experience through its non custodial crypto world. Which means it does not keep customers Kryptonians control making cash or the sufficient and cheapest place to buy Bitcoin in India. Yeah. Show me the use of its banking and wash trading network to create the peer to peer model for alerts for its Indian services? Which. Enable Indian residents to buy and sell Bitcoin Ethereum, we're bank. We're completely operations, profitable less than 6 months in India. If I percent, making the net feel less than 1%. It also reduced from 25,000 to 10,000. Available for business worldwide, it always had a strong footprint in India.",
  entities:
    "[{}, [{'start': 21, 'end': 35, 'label': 'PERCENT', 'text': '3.49% to 1.49%'}, {'start': 50, 'end': 65, 'label': 'ORG', 'text': 'a Bitcoin Price'}, {'start': 69, 'end': 74, 'label': 'GPE', 'text': 'India'}, {'start': 84, 'end': 97, 'label': 'ORG', 'text': 'Global Giants'}, {'start': 121, 'end': 127, 'label': 'PERSON', 'text': 'Diwali'}, {'start': 129, 'end': 148, 'label': 'EVENT', 'text': 'the Indian Festival'}, {'start': 160, 'end': 165, 'label': 'PERSON', 'text': 'Kesha'}, {'start': 133, 'end': 139, 'label': 'NORP', 'text': 'Indian'}, {'start': 248, 'end': 270, 'label': 'PERSON', 'text': 'Cryptocurrencies Kesha'}, {'start': 408, 'end': 419, 'label': 'NORP', 'text': 'Kryptonians'}, {'start': 52, 'end': 59, 'label': 'GPE', 'text': 'Bitcoin'}, {'start': 69, 'end': 74, 'label': 'GPE', 'text': 'India'}, {'start': 133, 'end': 139, 'label': 'NORP', 'text': 'Indian'}, {'start': 133, 'end': 139, 'label': 'NORP', 'text': 'Indian'}, {'start': 680, 'end': 696, 'label': 'PERSON', 'text': 'Bitcoin Ethereum'}, {'start': 750, 'end': 768, 'label': 'DATE', 'text': 'less than 6 months'}, {'start': 69, 'end': 74, 'label': 'GPE', 'text': 'India'}, {'start': 813, 'end': 825, 'label': 'PERCENT', 'text': 'less than 1%'}, {'start': 848, 'end': 854, 'label': 'CARDINAL', 'text': '25,000'}, {'start': 858, 'end': 864, 'label': 'CARDINAL', 'text': '10,000'}, {'start': 69, 'end': 74, 'label': 'GPE', 'text': 'India'}]]",
  transcribe: [
    {
      text: "How you doing?",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.48447859287261963}, {'labels': 'Speech', 'probability': 0.4655689597129822}, {'labels': 'Narration, monologue', 'probability': 0.3219180703163147}]}"
    },
    {
      text:
        "From 3.49% to 1.49%, resulting in a Bitcoin Price in India equal to Global Giants.",
      sound:
        "{'result': [{'labels': 'Speech', 'probability': 0.5138446688652039}, {'labels': 'Narration, monologue', 'probability': 0.46689093112945557}, {'labels': 'Mantra', 'probability': 0.3988468647003174}]}"
    },
    {
      text:
        "Bring the occasion of Diwali, the Indian Festival of wealth. Kesha opened its door for its Indian customers to provide avalit enabling.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.6242285370826721}, {'labels': 'Narration, monologue', 'probability': 0.5210989713668823}, {'labels': 'Speech', 'probability': 0.41265958547592163}, {'labels': 'Speech synthesizer', 'probability': 0.28425583243370056}]}"
    },
    {
      text:
        "Buy and sell Cryptocurrencies Kesha was able to deliver smooth and secure customer experience through its non custodial crypto world.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.6701387166976929}, {'labels': 'Narration, monologue', 'probability': 0.5017221570014954}, {'labels': 'Speech', 'probability': 0.3351864218711853}, {'labels': 'Speech synthesizer', 'probability': 0.26386553049087524}]}"
    },
    {
      text:
        "Which means it does not keep customers Kryptonians control making cash or the sufficient and cheapest place to buy Bitcoin in India.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.5830453634262085}, {'labels': 'Speech', 'probability': 0.4568648934364319}, {'labels': 'Narration, monologue', 'probability': 0.4441896677017212}]}"
    },
    {
      text:
        "Yeah. Show me the use of its banking and wash trading network to create the peer to peer model for alerts for its Indian services? Which.",
      sound:
        "{'result': [{'labels': 'Narration, monologue', 'probability': 0.43766748905181885}, {'labels': 'Mantra', 'probability': 0.42284858226776123}, {'labels': 'Speech', 'probability': 0.2681922912597656}]}"
    },
    {
      text:
        "Enable Indian residents to buy and sell Bitcoin Ethereum, we're bank.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.501570463180542}, {'labels': 'Speech', 'probability': 0.37769532203674316}, {'labels': 'Narration, monologue', 'probability': 0.36861535906791687}]}"
    },
    {
      text:
        "We're completely operations, profitable less than 6 months in India.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.5381550192832947}, {'labels': 'Speech', 'probability': 0.4568677544593811}, {'labels': 'Narration, monologue', 'probability': 0.3847735524177551}]}"
    },
    {
      text: "If I percent, making the net feel less than 1%.",
      sound:
        "{'result': [{'labels': 'Speech', 'probability': 0.5359576940536499}, {'labels': 'Mantra', 'probability': 0.4988497495651245}, {'labels': 'Narration, monologue', 'probability': 0.23988205194473267}]}"
    },
    {
      text: "It also reduced from 25,000 to 10,000.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.6551105976104736}, {'labels': 'Speech', 'probability': 0.4688801169395447}, {'labels': 'Narration, monologue', 'probability': 0.32625138759613037}]}"
    },
    {
      text:
        "Available for business worldwide, it always had a strong footprint in India.",
      sound:
        "{'result': [{'labels': 'Mantra', 'probability': 0.4899630546569824}, {'labels': 'Speech', 'probability': 0.45476627349853516}, {'labels': 'Narration, monologue', 'probability': 0.2816360294818878}]}"
    },
    {
      text:
        "14 countries, including India and has become a backbone for Crypto industry due to its vast range of crypto friendly banking services.",
      sound:
        "{'result': [{'labels': 'Narration, monologue', 'probability': 0.3846401572227478}, {'labels': 'Mantra', 'probability': 0.32512080669403076}, {'labels': 'Speech', 'probability': 0.2661914825439453}]}"
    },
    {
      text: "So it was founded.",
      sound:
        "{'result': [{'labels': 'Speech', 'probability': 0.6017341613769531}]}"
    }
  ],
  keywords:
    "[['global giants', 0.04208607577192683], ['price in india', 0.06601483913702619], ['india', 0.07320890897143818], ['bitcoin price', 0.07443493038890803], ['indian', 0.07529510101293664], ['indian festival', 0.09243980609991152], ['equal to global', 0.10508576287406873], ['bitcoin', 0.10919959298424126], ['sell bitcoin ethereum', 0.11546245025236306], ['sell cryptocurrencies kesha', 0.12430187001190747], ['buy', 0.14693659807654016], ['bitcoin ethereum', 0.14941387970327422], ['india equal', 0.1516482014778982], ['cryptocurrencies kesha', 0.15978100940434295], ['occasion of diwali', 0.16154743313428646], ['festival of wealth', 0.16188905984972327], ['buy bitcoin', 0.1687824067829298], ['indian customers', 0.18060891187143385], ['giants', 0.19097672725887485], ['kesha', 0.19490579613203798]]",
  summarizer:
    "Which means it does not keep customers Kryptonians control making cash or the sufficient and cheapest place to buy Bitcoin in India.\nEnable Indian residents to buy and sell Bitcoin Ethereum, we're bank.",
  sentiment: "NEGATIVE"
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      meetingName: "My Awesome Meeting",
      isFlyoutVisible: false,
      isSwitchChecked: true,
      checked: [],
      expanded: ["/ENTITIES/"],
      tree_node: [],
      isRightSidebar: true,
      isMobile: true,
      headerColor: "white",
      themeSwitch: localStorage.getItem("ThemeSwitch") === "true",
      annotateValue: [],
      MeetingText: "",
      Summary: "",
      ENTITIES: [],
      KeyWords: []
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

  changeTheme = e => {
    if (e.target.checked === false) {
      console.log("light here", localStorage.getItem("ThemeSwitch"));

      localStorage.setItem("ThemeSwitch", false);

      this.props.setTheme("light");
    } else {
      console.log("dark here", localStorage.getItem("ThemeSwitch"));

      localStorage.setItem("ThemeSwitch", true);

      this.props.setTheme("dark");
    }
  };

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

  toggleRightSidebar = () => {
    let { isRightSidebar } = this.state;
    let responsiveWave = window.responsiveWave;
    if (isRightSidebar) {
      this.setState(
        {
          isRightSidebar: false
        },
        responsiveWave
      );
    } else {
      this.setState(
        {
          isRightSidebar: true
        },
        responsiveWave
      );
    }
  };

  entitySelectCallback = () => {};

  setAnnotateValue = value => {
    this.setState({
      annotateValue: value
    });
  };

  componentDidMount() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      this.setState({
        headerColor: "#1a1b20"
      });
    } else {
      this.setState({
        headerColor: "white"
      });
    }
    document.getElementById("reportPageHeader").style.padding = "0";
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    window.responsiveWave();

    var meetingID = localStorage.getItem("meetingID");

    var bodyFormData = new FormData();
    bodyFormData.set("meeting_id", meetingID);
    // bodyFormData.set("group_id", groupID);

    axios({
      method: "post",
      url: BASE_URL + "report/",
      data: bodyFormData, 
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(response => {
      console.log("response");

      let ApiResParse = response.data;
      console.log(ApiResParse)

      let meetingText = ApiResParse.fullText;
      let entities = ApiResParse.entities[1];
      let keywords = ApiResParse.keywords;
      let summary = ApiResParse.summarizer;

      this.setState({
        MeetingText: meetingText,
        ENTITIES: entities,
        KeyWords: keywords,
        Summary: summary,
        // meetingName: meetingText
      });
    });
  }

  resize() {
    this.setState({ isMobile: window.innerWidth <= 760 });
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
                ENTITIES={this.state.ENTITIES}
              />
            </div>
          </EuiFlyoutBody>
        </EuiFlyout>
      );
    }
    return (
      <>
        <EuiFlexGroup gutterSize="none">
          <EuiFlexItem>
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
                  backgroundColor: this.state.headerColor,
                  zIndex: "5"
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
                        <EuiShowFor sizes={["xs", "s"]}>
                          <EuiIcon
                            style={{}}
                            type="menuLeft"
                            onClick={this.showFlyout}
                          />
                        </EuiShowFor>
                        <EuiShowFor sizes={["m", "l", "xl"]}>
                          {!this.state.isRightSidebar && (
                            <EuiIcon
                              style={{}}
                              type="menuLeft"
                              onClick={this.toggleRightSidebar}
                            />
                          )}
                        </EuiShowFor>
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "12px"
                          }}
                        >
                          <FiCalendar
                            style={{
                              height: "17px",
                              width: "17px"
                            }}
                          />
                          <span style={{ marginLeft: "0.25rem" }}>
                            {"21th Dec 2019"}
                          </span>

                          <FiClock
                            style={{
                              height: "17px",
                              width: "17px",
                              marginLeft: "1.2rem"
                            }}
                          />

                          <span style={{ marginLeft: "0.25rem" }}>
                            {"3:26"}
                          </span>
                        </div>
                        <EuiFlexGroup
                          wrap
                          responsive={false}
                          gutterSize="xs"
                          style={{
                            marginTop: "8px",
                            marginLeft: "12px"
                          }}
                        >
                          {/* {console.log(this.state.KeyWords, "xxx this.state.KeyWords")} */}
                          {/* {this.state.KeyWords.map(elem => (
                            <EuiFlexItem grow={false} key={elem[0]}>
                              <EuiBadge color={"#c7c7c7"}>{elem[0]}</EuiBadge>
                            </EuiFlexItem>
                          ))} */}
                        </EuiFlexGroup>
                      </EuiPageContentHeaderSection>
                      <EuiPageContentHeaderSection>
                        <EuiSwitch
                          label="light/dark"
                          checked={this.state.themeSwitch}
                          onChange={this.changeTheme}
                        />
                      </EuiPageContentHeaderSection>
                    </EuiPageContentHeader>
                    <EuiPageContentBody>
                      {flyout}
                      <ReportBody
                      key={this.state}
                        annotateValue={this.state.annotateValue}
                        Summary={this.state.Summary}
                        MeetingText={this.state.MeetingText}
                      />
                    </EuiPageContentBody>
                  </EuiPageContent>
                </EuiPageBody>
              </EuiPage>
            </div>
          </EuiFlexItem>
          {!this.state.isMobile && this.state.isRightSidebar ? (
            <EuiFlexItem
              grow={false}
              style={{
                width: "250px",
                marginTop: "60px",
                marginBottom: "16px"
              }}
            >
              <EuiPanel
                style={{
                  position: "fixed",
                  height: "100vh"
                }}
              >
                <EuiIcon type="menuRight" onClick={this.toggleRightSidebar} />
                <EuiText>
                  <p>
                    Select the required entites to get an awesome visualization
                    😉
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
              </EuiPanel>
            </EuiFlexItem>
          ) : null}
        </EuiFlexGroup>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
