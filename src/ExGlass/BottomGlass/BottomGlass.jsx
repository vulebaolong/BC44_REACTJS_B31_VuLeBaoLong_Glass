import React, { Component } from "react";
import "./BottomGlass.css";

export default class BottomGlass extends Component {
    renderGlass = () => {
        const { dataGlasses, handleChangeGlass, active } = this.props;
        return dataGlasses.map((item) => {
            return (
                <div key={item.id} style={{ width: "15%" }} className="p-2 ">
                    <img
                        onClick={() => {
                            handleChangeGlass(item.id);
                        }}
                        className={
                            active === item.id ? "bottom_glass-active" : "bottom_glass"
                        }
                        style={{ width: "100%", height: "100%", cursor: "pointer" }}
                        src={item.url}
                        alt=""
                    />
                </div>
            );
        });
    };
    render() {
        return <div className="bg-light mt-5 row p-5 rounded">{this.renderGlass()}</div>;
    }
}
