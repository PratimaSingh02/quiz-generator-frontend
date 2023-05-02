import React, { Component } from "react";

const VideoContext = React.createContext();

class VideoProvider extends Component {
  state = {
    questions: [],
    summary: [],
    recommendations: [],
    videoId: "",
  };
  // state = {
  //     questions: "Quiz will appear here",
  //     summary: "Summary will appear here",
  //     recommendations: "Recommendations will appear here"
  // }

  setValues = (response) => {
    this.setState({
      questions: response.questions,
      summary: response.summaries,
      recommendations: response.urls,
    });
  };

  setVideoId = (tempVideoId) => {
    this.setState({
      ...this.state,
      videoId: tempVideoId,
    });
  };

  render() {
    return (
      <VideoContext.Provider
        value={{
          ...this.state,
          setValues: this.setValues,
          setVideoId: this.setVideoId,
        }}
      >
        {this.props.children}
      </VideoContext.Provider>
    );
  }
}

const VideoConsumer = VideoContext.Consumer;
export function withVideoConsumer(Component) {
  //this is a higher order component because it returns a component

  return function ConsumerWrapper(props) {
    return (
      <VideoConsumer>
        {(value) => <Component {...props} context={value} />}
      </VideoConsumer>
    );
  };
}

export { VideoProvider, VideoConsumer, VideoContext };
