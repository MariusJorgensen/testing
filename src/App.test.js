import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Popup from 'react-popup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDom.render(
    <Popup
    className="mm-popup"/>,
    document.getElementById('popupContainer')
  );
  ReactDOM.unmountComponentAtNode(div);
});
