import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Lemon from "./Mine/Lemon.jsx";
import Tian from "./Mine/Tian.jsx";
export default class Mine extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            id: 1
        }
    }
    getInputValue(e){
        this.setState({
            id: e.target.value
        })
    }
    render() {
        return (
            <div>
                Mine Page
                <input value={this.state.id} onChange={this.getInputValue.bind(this)} />
                <ul>
                    <li>
                    <Link to={`/mine/lemon/${this.state.id}`}>Lemon</Link>
                    </li>
                    <li>
                    <Link to="/mine/tian">Tian</Link>
                    </li>
                </ul>
                <Route path="/mine/lemon/:id" component={Lemon} />
                <Route path="/mine/tian" component={Tian} />
            </div>
        )
    }
}
