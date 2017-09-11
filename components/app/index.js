import React from 'react';
import {RenderRoutes} from 'base/routes';
import {connect} from 'react-redux';

import {Categories} from 'api';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.props.dispatch(Categories.actions.categories());
  }

  render() {
    return (
      <div>
        <RenderRoutes routes={this.props.route.routes}/>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};

export default connect()(App);
