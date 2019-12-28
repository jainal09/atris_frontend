import React, { Component } from "react";
import { render } from "react-dom";
import uuidv4 from "uuid/v4";
import ReactMic from "./ReactMic";
import { blobToBase64String } from "blob-util";


export default class AtrisRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobURL: null,
      isRecording: false,
      isPaused: false,
      ws: null,
      audioSegData: []
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.audioSegData !== this.state.audioSegData) {
      let sortedState = this.state.audioSegData.sort((a, b) => {
        return a.number - b.number;
      });
      console.log(sortedState, "sortedState");
      this.props.setTranscribeData(sortedState);
    }
  };

  componentDidMount = () => {
   
    var meetingObj = localStorage.getItem("meetingData");
    var meetingData = JSON.parse(meetingObj);

    this.meetingID = meetingData.meetingID;
    this.groupID = meetingData.groupID;
    this.connect();
  };

  componentWillUnmount = () => {
    clearInterval(this.connectInterval);

    this.state.ws.close();

    clearInterval(this.connectInterval);
  };

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    // try {
    //   var ws = new WebSocket("ws://192.168.43.254:8070/ws");
    // } catch (error) {
    //   console.log(error); // catch error
    // }
    var ws = new WebSocket("ws://192.168.43.217:8000/ws/");
    let that = this; // cache the this
    // var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });
      ws.send(this.meetingID);
      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearInterval(this.connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      this.connectInterval = setTimeout(
        this.check,
        Math.min(10000, that.timeout)
      ); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = err => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };

    ws.onmessage = evt => {
      // listen to data sent from the websocket server
      console.log(evt.data);

      const message = JSON.parse(evt.data);
      console.log(message, "message xx");
      let dataFromServer = message.message.message;
      // let test = {
      //   segment: 2,
      //   text:
      //     "Aerial gate all those moments will come out in time, like period."
      // };

      this.setState({
        audioSegData: [...this.state.audioSegData, dataFromServer]
      });
      console.log(dataFromServer, "dataFromServer");
    };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  sendMessage = data => {
    const { ws } = this.state; // websocket instance passed as props to the child component.

    try {
      ws.send(data); //send data to the server
    } catch (error) {
      console.log(error); // catch error
    }
  };

  // stopRecording = () => {
  //   this.setState({ isRecording: false });
  // };

  onData = recordedBlob => {
    console.log("ONDATA CALL IS BEING CALLED! ", recordedBlob);
    this.sendMessage(recordedBlob);
    console.log(recordedBlob, "qqq qq");
  };

  onStop = async recordedBlob => {
    //ala phone battery died !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Allah hu akbar
    // ab run karoo
    console.log(recordedBlob, "tapa tap")

    let base64Audio = await blobToBase64String(recordedBlob)
   
    
    let finalMsg = {
      status : "finished",
      meetingID: this.meetingID
    }

    console.log(finalMsg, "tapa tap 2") 
    this.sendMessage(JSON.stringify(finalMsg));
  };

  render() {
    return (
      <ReactMic
        onData={this.onData}
        redirectAtEnd={"processing"} // redirect to processing or audioPlayer
        routeFxn={this.props.routeFxn}
        onStop={this.onStop}
        // onStart={this.onStart}
        // onSave={this.onSave}
        // onBlock={this.onBlock}
        // onPause={this.onPause}
      />
    );
  }
}
