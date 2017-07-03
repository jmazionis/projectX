import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const CustomButton = ({ name, onClick }) => {
    return (
        <Button onClick={onClick}>
            {name}
        </Button>
    );
};

// CustomButton.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired
// };

export default CustomButton;
