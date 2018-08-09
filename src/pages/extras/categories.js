import React, { Component } from 'react';

import Category from '../../components/extras/category';

class Categories extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <Category name="Sample Heading 1" imageUrl={require('../../assets/img/user/user-1.jpg')} subCatCount="9" />
                <Category name="Sample Heading 2" imageUrl={require('../../assets/img/user/user-2.jpg')} subCatCount="8" />
                <Category name="Sample Heading 3" imageUrl={require('../../assets/img/user/user-3.jpg')} subCatCount="7" />
                <Category name="Sample Heading 4" imageUrl={require('../../assets/img/user/user-4.jpg')} subCatCount="6" />
                <Category name="Sample Heading 5" imageUrl={require('../../assets/img/user/user-5.jpg')} subCatCount="5" />
            </div>
        );
    }
}

export default Categories;
