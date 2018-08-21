import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentCompAverageCalc from './App';
import SearchProduct from './SearchProduct';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><ParentCompAverageCalc /><SearchProduct /></div>, document.getElementById('root'));
// ReactDOM.render(<SearchProduct />, document.getElementById('root'));
registerServiceWorker();