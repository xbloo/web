import React, { Component } from "react";
import Intro from "./Intro";

class IntroList extends Component {
    render() {
        return (
            <div>
            <h1>Selected Projects</h1>
        <Intro />
        <Intro />
        <Intro />
        </div>
    );
    }
}

export default IntroList;
