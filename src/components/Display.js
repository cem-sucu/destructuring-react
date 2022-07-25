import React, { Component } from "react";
import Singers from "./Singers";

class Display extends Component {
    state = {};
    render() {
        return (
            <div>
                <h1>Musiciens</h1>
                <Singers name="Eric Clapton" age="74" />
                <Singers name="Jimi Hendrix" age="24" />
                <Singers name="David Gilmour" age="73" />
                <Singers name="Carlos Santana" age="71" />
            </div>
        );
    }
}

export default Display;
