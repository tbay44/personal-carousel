import React from "react";
import ReactDOM from "react-dom";
import '../styles.scss';
import '../styles.css';
import App from '../Components/App'

import { Provider } from 'react-redux';
import store from '../store';

ReactDOM.render(<Provider store = {store}><App /></Provider>,document.querySelector("#personal-carousel-root"));
