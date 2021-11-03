import React from 'react';
import appStyles from './App.css';
import generalStyles from "./styles/general.scss";
import indexStyles from "./index.css";
import {Styled} from 'direflow-component';
import MainContainer from "./views/main-container";
import PropTypes from "prop-types";

const App = (props) => {
    return (
        <Styled styles={[indexStyles, appStyles, generalStyles]}>
            <div className="App" style={{backgroundColor: props.color}}>
                <h3 style={{display: props.msg && props.msg.trim().length > 0 ? 'block' : 'none'}}>{props.msg}</h3>
                <MainContainer/>
            </div>
        </Styled>
    );
}

App.defaultProps = {
  color: 'transparent',
  msg: ''
};

App.propTypes = {
    color: PropTypes.string,
    msg: PropTypes.string,
};

export default App;
