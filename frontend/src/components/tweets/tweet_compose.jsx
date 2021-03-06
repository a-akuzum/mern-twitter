import React from 'react';
import TweetBox from './tweet_box';

class TweetCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newTweet: ""
        }

        this.handlSubmit = this.handlSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTweet: nextProps.newTweet.text });
    }

    handlSubmit(e) {
        e.preventDefault();
        let tweet = {
            text: this.state.text
        };

        this.props.composeTweet(tweet);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your tweet..."
                        />
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
                <br/>
                <TweetBox text={this.state.newTweet} />
            </div>
        )
    }
}

export default TweetCompose;