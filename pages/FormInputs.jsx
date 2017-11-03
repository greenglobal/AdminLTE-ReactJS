import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CategorySelectorInput, SubCategorySelectorInput} from 'components/UI/Form';

class FormInputs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      categoryIds: []
    }
  }

  selectCategories(value) {
    let categoryIds = [];
    value.map(item => {
      categoryIds.push(item.value);
    });

    this.setState({
      categoryIds
    });
  }

  render() {
    return (
      <MainLayout>
        <div>
          <CategorySelectorInput label="Chọn lĩnh vực kinh doanh"
              onChange={this.selectCategories.bind(this)}
            />

          <SubCategorySelectorInput label="Chọn nhóm sản phẩm"
              onChange={this.selectCategories.bind(this)}
            />
        </div>
      </MainLayout>
    );
  }
}

export default connect()(FormInputs);
