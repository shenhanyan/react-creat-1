import React, { Component } from "react";

import Son from "./Son";
import personContext from "./context";

 class Father extends Component {
    static contextType = personContext;

    render() {
        console.log(this.context);

        return (
            <>
                <h3>Father...</h3>
                <Son/>
            </>

        )
    }
}
export default Father