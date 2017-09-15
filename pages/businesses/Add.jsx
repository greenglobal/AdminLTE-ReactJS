import React from 'react';
import {MainLayout} from 'components/layouts';
import {BusinessForm} from 'components/business';
import {Businesses} from 'base/api';

class AddBusiness extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  cb(response) {
    // Back to businesses list
    this.props.history.push('/businesses');
  }

  render() {
    return (
      <MainLayout>
        <div>
          Add new business
          <BusinessForm fnSubmit={Businesses.actions.add} cb={this.cb.bind(this)}/>
        </div>
      </MainLayout>
    );
  }
}

AddBusiness.contextTypes = {
  router: React.PropTypes.object
};

export default AddBusiness;
