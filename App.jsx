import React from "react";
import CustomButton from "./components/CustomButton";

export default class App extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Hello World</h1>
                <div>
                    <CustomButton name={"Toggle increment"} />
                </div>
            </div>
        );
    }
}
