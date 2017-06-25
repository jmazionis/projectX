import React from "react";
import CustomMenu from "./CustomMenu";

export default class App extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Hello World</h1>
                <div>
                    <CustomMenu />
                </div>
            </div>
        );
    }
}
