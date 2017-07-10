import { connect } from "react-redux";
import Panel from "../components/Panel";
import { incrementCounter, decrementCounter } from "../actions/index";

const mapStateToProps = state => {
    return { results: state.counterValue };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementClick: () => dispatch(incrementCounter()),
        onDecrementClick: () => dispatch(decrementCounter())
    };
};

const PanelContainer = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelContainer;
