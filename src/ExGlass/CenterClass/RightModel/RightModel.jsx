import React, { Component } from "react";
import "./RightModel.css";

export default class RightModel extends Component {
    render() {
        const { dataChange } = this.props;
        return (
            <div className="right_model text-center">
                <div className="right_model_glass">
                    <img style={{ width: "100%" }} src={dataChange.url} alt="456" />
                </div>
                <div style={{ width: "50%" }} className="right_model_content mx-auto">
                    <img
                        style={{ width: "100%" }}
                        src="./img/glassesImage/model.jpg"
                        alt="123"
                    />
                    <div className="right_model_content-desc text-start text-white ">
                        <p className="text-primary fs-6 mb-1">{dataChange.name}</p>
                        <p className="fs-6 m-0">{dataChange.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}
