import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import history from './history';

//support css files...
import './assets/plugins/font-awesome/5.0/css/fontawesome-all.min.css';
import './assets/plugins/animate/animate.min.css';
import './assets/css/default/style.min.css';
import './assets/css/default/style-responsive.min.css';
import './assets/css/default/theme/default.css';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>, document.getElementById('root'));
registerServiceWorker();
