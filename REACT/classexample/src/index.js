import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

/* Class With only Render func
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
        return <div>Latitude: </div>;
    }
} */

/* Class With Conatructor and with state initialization. This is not the best way of doing it.. but can be done.
class App extends React.Component {
    constructor(props) {
        super(props);

        //THis is the only time we do direct assignment for STATE of the class
        // ALL other TIme use this.setState() internal Method
        this.state = { lat: null, errorMsg: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.errorMsg })
        );
    }

    //We have to define Render func .// this is called many times
    render() {
        if (this.state.errorMsg && !this.state.lat)
            return <div>Error: {this.state.errorMsg} </div>;

        if (!this.state.errorMsg && this.state.lat)
            return <div>Latitude: {this.state.lat} </div>;

        return <div>loading!</div>;
    }
} */

class App extends React.Component {
    // State Initialization Can be done in ctor or private property
    state = { lat: null, errorMsg: '' };

    // All Initialization is recomended to be done here
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.errorMsg })
        );
    }


    //We have to define Render func .// this is called many times
    render() {
        if (this.state.errorMsg && !this.state.lat)
            return <div>Error: {this.state.errorMsg} </div>;

        // Created New SeasonDisplay JS file to seperate the logic.
        // sending lat as prop to SeasonDisplay JS file
        if (!this.state.errorMsg && this.state.lat)
            return <SeasonDisplay lat={this.state.lat} />;

        return <div>loading!</div>;
    }
}

ReactDom.render(<App />, document.querySelector('#root'));