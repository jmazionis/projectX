import React from "react";
import ResultsArea from "../components/ResultsArea";
import CustomButton from "../components/CustomButton";

const Panel = ({ onIncrementClick, onDecrementClick, results }) => {
    return (
        <div>
            <span>
                <CustomButton onClick={onIncrementClick} name="Increment" />
            </span>
            <span>
                <CustomButton onClick={onDecrementClick} name="Decrement" />
            </span>
            <div>
                <ResultsArea results={results} />
            </div>
        </div>
    );
};

export default Panel;
