import React, { Component } from "react";
import { render } from "react-dom";
import ReactMic from "./ReactMic";

export default class AtrisRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blobURL: null,
      isRecording: false,
      isPaused: false,
      ws: null
    };
  }

  componentDidMount() {
    // this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    var ws = new WebSocket("ws://127.0.0.1:8000/ws/");
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
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
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
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
    // this.sendMessage(recordedBlob);
  };

  render() {
    return (
      <ReactMic
      onData={this.onData}
      redirectAtEnd={"processing"} // redirect to processing or audioPlayer
      routeFxn= {this.props.routeFxn}
        // onStop={this.onStop}
        // onStart={this.onStart}
        // onSave={this.onSave}
        // onBlock={this.onBlock}
        // onPause={this.onPause}
      />
    );
  }
}

 