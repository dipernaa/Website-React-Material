import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

injectTapEventPlugin();

const App = () => (
  <div>
    {routes}
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));
