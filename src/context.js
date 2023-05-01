import React, { Component } from 'react'

const VideoContext = React.createContext();

class VideoProvider extends Component {
    state = {
        questions: [],
        summary: [],
        recommendations: []
    }
    // state = {
    //     questions: "Quiz will appear here",
    //     summary: "Summary will appear here",
    //     recommendations: "Recommendations will appear here"
    // }

    setQuestions = (tempQuestions) => {
        this.setState({
            ...this.state,
            questions: tempQuestions
        });
    }
    setSummary = (tempSummary) => {
        this.setState({
            ...this.state,
            summary: tempSummary
        });
    }
    setRecommendations = (tempRecommendations) => {
        console.log(tempRecommendations);
        this.setState({
            ...this.state,
            recommendations: tempRecommendations
        });
    }

    render() {
        return (
            <VideoContext.Provider
                value={{
                    ...this.state,
                    setQuestions: this.setQuestions,
                    setSummary: this.setSummary,
                    setRecommendations: this.setRecommendations,
                }}>
                {this.props.children}
            </VideoContext.Provider>
        )
    }
}

const VideoConsumer = VideoContext.Consumer;
export function withVideoConsumer(Component) {
    //this is a higher order component because it returns a component

    return function ConsumerWrapper(props) {
        return <VideoConsumer>
            {value => <Component {...props} context={value} />}
        </VideoConsumer>
    }
}

export { VideoProvider, VideoConsumer, VideoContext }