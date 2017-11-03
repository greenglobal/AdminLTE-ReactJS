import React from 'react';
import {RenderRoutes} from 'base/routes';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import { Auth, User } from 'api';
import cookie from 'react-cookie';
import {Categories} from 'api';
import {isAdmin} from 'base/actions';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    if (typeof cookie.load('accessToken') == 'undefined') {
      // this.props.history.push('/');
    } else {

      this.props.dispatch(isAdmin()).then(response => {
        if (response.isAuthenticated) {
          // this.props.history.push(this.props.defaultPage);
        } else {
          this.props.history.push('/');
        }
      });


      this.props.dispatch(Categories.actions.list({}, null, {}))
    }
  }

  render() {
    return (
      <div>
        <RenderRoutes routes={this.props.route.routes}/>
      </div>
    );
  }
}

App.defaultProps = {
  defaultPage: "/categories"
}

App.contextTypes = {
  router: React.PropTypes.object
};

export default connect()(withRouter(App));
