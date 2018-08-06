import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-block">
                            <div className="media media-xs">
                                <a className="media-left" href="javascript:;">
                                    <img src={require('../../assets/img/user/user-1.jpg')} alt="" className="media-object rounded-corner" />
                                </a>
                                <div className="media-body">
                                    <p className="card-text">Media heading <br /><span className="subcat">9 Subcategories</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-block">
                            <div className="media media-xs">
                                <a className="media-left" href="javascript:;">
                                    <img src={require('../../assets/img/user/user-1.jpg')} alt="" className="media-object rounded-corner" />
                                </a>
                                <div className="media-body">
                                    <p className="card-text">Media heading <br /><span className="subcat">9 Subcategories</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-block">
                            <div className="media media-xs">
                                <a className="media-left" href="javascript:;">
                                    <img src={require('../../assets/img/user/user-1.jpg')} alt="" className="media-object rounded-corner" />
                                </a>
                                <div className="media-body">
                                    <p className="card-text">Media heading <br /><span className="subcat">9 Subcategories</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-block">
                            <div className="media media-xs">
                                <a className="media-left" href="javascript:;">
                                    <img src={require('../../assets/img/user/user-1.jpg')} alt="" className="media-object rounded-corner" />
                                </a>
                                <div className="media-body">
                                    <p className="card-text">Media heading <br /><span className="subcat">9 Subcategories</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
