import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Person from "../Common/Person";
import IntroList from "./IntroList";

class App extends Component {
    render() {
        return (
            <div>
            <Person />
            <Header />
            <IntroList />
            <Footer />
            </div>
    );
    }
}

export default App;
