import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import {routes} from 'base/routes';
import {store} from 'base/reducers';

import {Root} from 'base/routes';

ReactDOM.render((
  <Root store={store} routes={routes}/>
), document.getElementById('root'));
