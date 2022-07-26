import React, { Component } from "react";
import Car from "./Car";

class Form extends Component {
    state = {
        username: "",
        color: "rgba(137, 138, 138, 0.4)",
        colors: [
            "",
            "rgba(231, 135, 138, 0.4)",
            "rgba(135, 135, 227, 0.4)",
            "rgba(135, 221, 135, 0.4)",
            "rgba(135, 135, 135, 0.4)",
            "rgba(193, 97, 135, 0.4)",
        ],
        comment: "",
    };

    handlePseudo = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    handleColor = (e) => {
        this.setState({
            color: e.target.value,
        });
    };

    handleComments = (e) => {
        this.setState({
            comment: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            `Username:${this.state.username} couleur:${this.state.color} commentaire:${this.state.comment}`
        );
    };

    render() {
        return (
            <div>
                <Car color={this.state.color} height="400" />
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Pseudo</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handlePseudo}
                        />
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select
                            value={this.state.color}
                            onChange={this.handleColor}
                        >
                            {this.state.colors.map((color, index) => {
                                return (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                );
                            })}
                        </select>

                        <div>
                            <label>Commentaire</label>
                            <textarea
                                value={this.state.comment}
                                onChange={this.handleComments}
                            ></textarea>
                        </div>
                    </div>

                    <button>Valider</button>
                </form>
            </div>
        );
    }
}

export default Form;
