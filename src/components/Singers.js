import React from "react";

class Singers extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <p>
                    chanteur : {name} {age} ans
                </p>
            </div>
        );
    }
}

export default Singers;
