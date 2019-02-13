import React from 'react';
import lemon from '../images/lemon.png'
export default class Xlemon extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.props = props
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <img style={{
                    width:'200px'
                }} src={require('../images/lemon.png')} />
                <img style={{
                    width:'200px'
                }} src={lemon} />
                <img style={{
                    width:'200px'
                }} src="http://localhost:3000/images/lemon.png" />
            </div>
        )
    }
}