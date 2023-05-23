import React, { Component } from "react";
import TopGlass from "./TopGlass/TopGlass";
import CenterClass from "./CenterClass/CenterClass";
import BottomGlass from "./BottomGlass/BottomGlass";
import dataGlasses from "./dataGlasses.json";

export default class ExGlass extends Component {
    state = {
        dataGlasses,
        dataChange: dataGlasses[0],
        active: 1,
    };
    handleChangeGlass = (id) => {
        this.setState({
            dataChange: this.state.dataGlasses[id - 1],
            active: id,
        });
    };
    render() {
        return (
            <div>
                <TopGlass />
                <div className="container">
                    <CenterClass dataChange={this.state.dataChange} />
                    <BottomGlass
                        dataGlasses={this.state.dataGlasses}
                        handleChangeGlass={this.handleChangeGlass}
                        active={this.state.active}
                    />
                </div>
            </div>
        );
    }
}
