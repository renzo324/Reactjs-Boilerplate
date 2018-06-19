//imports
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. Component should produce HTML
const App = function(){
	return <div> Boilerplate!! </div>;
}
//Take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));