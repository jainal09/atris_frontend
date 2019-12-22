









// import React, { Component } from "react";
// import AtrisRecorder from "./AtrisRecorder/components";
// import { EuiSpacer } from "@elastic/eui";
// import {
//   EuiText,
//   EuiPanel,
//   EuiFlexItem,
//   EuiFlexGroup,
//   EuiBadge,
//   EuiAvatar
// } from "@elastic/eui";
// import { navigate } from "@reach/router";

// const badges = [
//   "default",
//   "hollow",
//   "primary",
//   "secondary",
//   "accent",
//   "warning",
//   "danger",
//   "#000",
//   "#fea27f"
// ];

// const speakers = [
//   "default",
//   "hollow",
//   "primary",
//   "secondary",
//   "accent",
//   "warning",
//   "danger",
//   "#000",
//   "#fea27f"
// ];
// export default class RecordBody extends Component {
//   state = {
//     transcribeData: []
//   };

//   setTranscribeData = data => {
//     this.setState({
//       transcribeData: data
//     });
//   };

//   render() {
//     let temp = [
//       {
//         segment: 1,
//         sounds: {
//           result: [
//             {
//               labels: "Speech",
//               probability: 0.5788897275924683
//             }
//           ]
//         }
//       },
//       {
//         segment: 1,
//         text:
//           "This is the some sample recording, which I am touched right now, I speak let's see how it would be additional."
//       },
//       {
//         segment: 2,
//         sounds: {
//           result: [
//             {
//               labels: "Speech",
//               probability: 0.6222794651985168
//             }
//           ]
//         }
//       },
//       {
//         segment: 2,
//         text: "Swedish recordings 123 equals when I check my free book by 678."
//       }
//     ];

//     let textData = [];
//     textData = this.state.transcribeData.filter(elem => {
//       return elem.hasOwnProperty("text");
//     });
//     let audioData = [];
//     audioData = this.state.transcribeData.filter(elem => {
//       return elem.hasOwnProperty("sounds");
//     });

//     return (
//       <div>
//         <AtrisRecorder
//           setTranscribeData={this.setTranscribeData}
//           routeFxn={() => {
//             // navigate("report");
//           }}
//         />

//         {/* <EuiText> The transcribe of firt speech by atris hello world </EuiText>

//         <EuiText style={{ marginTop: "8px" }}>
//           I watched C-beams glitter in the dark near the Tannhäuser Gate All
//           those moments will be lost in time, like tears in rain. Time to die.
//         </EuiText> */}

//         {
//         textData.map((data, index) => {
//           return (
//             <EuiPanel
//               style={{
//                 marginTop: "8px"
//               }}
//               key={index}
//             >
//               <div> 00:00 - 00:10 </div>
//               <EuiFlexGroup
//                 wrap
//                 responsive={false}
//                 gutterSize="xs"
//                 style={{ marginTop: "8px" }}
//               >
//                 {speakers.map(speaker => (
//                   <EuiFlexItem grow={false} key={speaker}>
//                     <EuiAvatar size="m" name={speaker} />
//                   </EuiFlexItem>
//                 ))}
//               </EuiFlexGroup>
//               <EuiText>{data.text}</EuiText>
//               <EuiFlexGroup wrap responsive={false} gutterSize="xs">
//                 {/* {badges.map(badge => (
//                   <EuiFlexItem grow={false} key={badge}>
//                     <EuiBadge color={"#c7c7c7"}>{badge}</EuiBadge>
//                   </EuiFlexItem>
//                 ))} */}

//                 {audioData[index].sounds.results.map(elem => {
//                   return (
//                     <EuiFlexItem grow={false} key={elem.labels}>
//                       <EuiBadge color={"#c7c7c7"}>{elem.labels}</EuiBadge>
//                     </EuiFlexItem>
//                   );
//                 })}
//               </EuiFlexGroup>
//             </EuiPanel>
//           );
//         })}
//       </div>
//     );
//   }
// }











// import React, { Component } from "react";
// import AtrisRecorder from "./AtrisRecorder/components";
// import { EuiSpacer } from "@elastic/eui";
// import {
//   EuiText,
//   EuiPanel,
//   EuiFlexItem,
//   EuiFlexGroup,
//   EuiBadge,
//   EuiAvatar
// } from "@elastic/eui";
// import { navigate } from "@reach/router";

// const badges = [
//   "default",
//   "hollow",
//   "primary",
//   "secondary",
//   "accent",
//   "warning",
//   "danger",
//   "#000",
//   "#fea27f"
// ];

// const speakers = [
//   "default",
//   "hollow",
//   "primary",
//   "secondary",
//   "accent",
//   "warning",
//   "danger",
//   "#000",
//   "#fea27f"
// ];
// export default class RecordBody extends Component {
//   state = {
//     transcribeData: []
//   };

//   setTranscribeData = data => {
//     this.setState({
//       transcribeData: data
//     });
//   };

//   render() {
//     return (
//       <div>
//         <AtrisRecorder
//           setTranscribeData={this.setTranscribeData}
//           routeFxn={() => {
//             // navigate("report");
//           }}
//         />

//         {/* <EuiText> The transcribe of firt speech by atris hello world </EuiText>

//         <EuiText style={{ marginTop: "8px" }}>
//           I watched C-beams glitter in the dark near the Tannhäuser Gate All
//           those moments will be lost in time, like tears in rain. Time to die.
//         </EuiText> */}

//         {this.state.transcribeData.map((data, index) => {
//           return (
//             <EuiPanel
//               style={{
//                 marginTop: "8px"
//               }}
//               key={index}
//             >
//               <div> 00:00 - 00:10 </div>
//               <EuiFlexGroup
//                 wrap
//                 responsive={false}
//                 gutterSize="xs"
//                 style={{ marginTop: "8px" }}
//               >
//                 {speakers.map(speaker => (
//                   <EuiFlexItem grow={false} key={speaker}>
//                     <EuiAvatar size="m" name={speaker} />
//                   </EuiFlexItem>
//                 ))}
//               </EuiFlexGroup>
//               <EuiText>{data.text}</EuiText>
//               <EuiFlexGroup wrap responsive={false} gutterSize="xs">
//                 {badges.map(badge => (
//                   <EuiFlexItem grow={false} key={badge}>
//                     <EuiBadge color={"#c7c7c7"}>{badge}</EuiBadge>
//                   </EuiFlexItem>
//                 ))}
//               </EuiFlexGroup>
//             </EuiPanel>
//           );
//         })}
//       </div>
//     );
//   }
// }













// import React, { Component } from "react";

// import {
//   EuiPage,
//   EuiPageBody,
//   EuiPageContent,
//   EuiPageContentBody,
//   EuiPageContentHeader,
//   EuiPageContentHeaderSection,
//   EuiPageHeader,
//   EuiPageHeaderSection,
//   EuiPageSideBar,
//   EuiTitle,
//   EuiAvatar,
//   EuiFieldSearch,
//   EuiHeaderSection,
//   EuiSpacer,
//   EuiFormControlLayout,
//   EuiFlyoutHeader,
//   EuiFlyoutBody,
//   EuiText,
   
//   EuiImage,
//   EuiNavDrawerGroup,
//   EuiNavDrawer,
//   EuiHorizontalRuleEuiShowFor,
//   EuiShowFor,
//   EuiHeader,
//   EuiHorizontalRule,
//   EuiHeaderLogo
// } from "@elastic/eui";
// import { EuiHeaderSectionItem } from "@elastic/eui";
 
// import { Link } from "@reach/router";
// import ReportBody from "../components/ReportBody";
// import { EuiIcon } from "@elastic/eui";
// import { EuiFlyout } from "@elastic/eui";
//  import TreeSelect from "../components/TreeSelect/TreeSelect";

// export default class RecordPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchValue: "",
//       meetingName: "My Awesome Meeting",
//       isFlyoutVisible: false,
//       isSwitchChecked: true,
//       annotateValue: [],
//       checked: [],
//       expanded: ["/ENTITIES/"],
//       tree_node: []
//     };
//   }

//  getReportPageThis = ()=>{
//    return this
//  }

//   searchValueChange = e => {
//     this.setState({
//       searchValue: e.target.value
//     });
//   };

//   handleMeetingNameChange = e => {
//     this.setState({
//       meetingName: e.target.value
//     });
//   };

//   onSwitchChange = () => {
//     this.setState({
//       isSwitchChecked: !this.state.isSwitchChecked
//     });
//   };

//   closeFlyout = () => {
//     this.setState({ isFlyoutVisible: false });
//   };

//   showFlyout = () => {
//     this.setState({ isFlyoutVisible: true });
//   };

//   entitySelectCallback = () => {};

//   setAnnotateValue = value => {
//     this.setState({
//       annotateValue: value
//     });
//   };

//   render() {
//     let flyout;
//     if (this.state.isFlyoutVisible) {
//       flyout = (
//         <EuiFlyout
//           ownFocus
//           onClose={this.closeFlyout}
//           size="s"
//           aria-labelledby="flyoutSmallTitle"
//         >
//           <EuiFlyoutHeader>
//             <EuiTitle size="s">
//               <h2 id="flyoutSmallTitle">Entity Selection</h2>
//             </EuiTitle>
//           </EuiFlyoutHeader>
//           <EuiFlyoutBody>
//             <EuiText>
//               <p>
//                 Select the required entites to get an awesome visualization 😉
//               </p>
//             </EuiText>
//             <EuiSpacer size="m" />
//             <div style={{ width: "20rem" }}>
//               <TreeSelect
//                 setAnnotateValue={this.setAnnotateValue}
//                 annotateValue={this.state.annotateValue}
//                 getReportPageThis={this.getReportPageThis}
//               />
//             </div>
//           </EuiFlyoutBody>
//         </EuiFlyout>
//       );
//     }
//     return (
//       <EuiPage style={{ height: "100vh" }}>
//         {/* <EuiPageSideBar>SideBar nav</EuiPageSideBar> */}
//         <EuiPageBody>
//           <EuiPageHeader responsive={false}>
//             <EuiPageHeaderSection>
//               <Link to="/">
//                 <EuiTitle size="l">
//                   <h1>Atris</h1>
//                 </EuiTitle>
//               </Link>
//             </EuiPageHeaderSection>
//             <EuiHeaderSection side="right">
//               <EuiAvatar
//                 size="l"
//                 name="Cat"
//                 imageUrl="https://source.unsplash.com/64x64/?cat"
//               />
//             </EuiHeaderSection>
//           </EuiPageHeader>
//           <EuiPageContent>
//             <EuiPageContentHeader>
//               <EuiPageContentHeaderSection>
//                 <EuiFormControlLayout icon="pencil">
//                   <input
//                     type="text"
//                     placeholder="Please Add Meeting Name"
//                     value={this.state.meetingName}
//                     onChange={this.handleMeetingNameChange}
//                     className="euiFieldText"
//                     style={{
//                       paddingLeft: "32px",
//                       // color: "#1a1c21",
//                       fontSize: "1.75rem",
//                       fontWeight: "100",
//                       letterSpacing: "-0.04em",
//                       fontFamily: "inherit",
//                       boxShadow: "none"
//                     }}
//                   />
//                 </EuiFormControlLayout>
//               </EuiPageContentHeaderSection>
//               <EuiPageContentHeaderSection>
//                 <EuiIcon
//                   style={{}}
//                   type="arrowLeft"
//                   onClick={this.showFlyout}
//                 />
//               </EuiPageContentHeaderSection>
//             </EuiPageContentHeader>
//             <EuiPageContentBody>
//               {flyout}
//               <ReportBody annotateValue={this.state.annotateValue} />
//             </EuiPageContentBody>
//           </EuiPageContent>
//         </EuiPageBody>
//       </EuiPage>
//     );
//   }
// }
