import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './myTheme';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
