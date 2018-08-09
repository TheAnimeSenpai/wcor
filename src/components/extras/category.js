import React, { Component } from 'react';

class Category extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="card card-inverse bg-gradient-black">
                    <div className="card-block">
                        <div className="media media-xs">
                            <a className="media-left" href="javascript:;">
                                <img src={this.props.imageUrl} alt="" className="media-object rounded-corner" />
                            </a>
                            <div className="media-body">
                                <p className="card-text category">{this.props.name} <br /><span className="subcat">{this.props.subCatCount} Subcategories</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;