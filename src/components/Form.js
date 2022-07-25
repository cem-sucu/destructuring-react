import React, { Component } from "react";
import Car from "./Car";

class Form extends Component {
    state = {};
    render() {
        return (
            <div>
                <Car color="red" height="400"/>
                <h1>Commentaire</h1>
                Formulaire
            </div>
        );
    }
}

export default Form;
