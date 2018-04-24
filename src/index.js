import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//What is registerServiceWorker doing????? It is an API that helps us cache our assets and other files so that when the user is offline or on a slow network, he/she can still see results on the page

registerServiceWorker();