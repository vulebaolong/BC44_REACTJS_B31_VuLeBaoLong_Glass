import React, { Component } from "react";
import LeftModel from "./LeftModel/LeftModel";
import RightModel from "./RightModel/RightModel";

export default class CenterClass extends Component {
    render() {
        const { dataChange } = this.props;
        return (
            <div className="row mt-5">
                <div className="col-6">
                    <LeftModel />
                </div>
                <div className="col-6">
                    <RightModel dataChange={dataChange} />
                </div>
            </div>
        );
    }
}
