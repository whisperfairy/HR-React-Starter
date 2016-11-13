/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './header.scss'
import Progress from '../../component/Progress.jsx'
class Header extends PureComponent {


    constructor(props) {
        super(props);
        console.log('Header' + 'constructor' + arguments);
        this.state={
            progress:0
        }
    }

    componentWillMount() {
        console.log('Header' + ' componentWillMount' + arguments);
    }
    componentDidMount() {
        console.log('Header' + ' componentDidMount' + arguments);
    }
    componentWillReceiveProps() {
        console.log('Header' + ' componentWillReceiveProps' + arguments);
    }
    shouldComponentUpdate() {
        console.log('Header' + ' shouldComponentUpdate' + arguments);
        return true;
    }
    componentWillUpdate() {
        console.log('Header' + ' componentWillUpdate' + arguments);
    }
    componentDidUpdate() {
        console.log('Header' + ' componentDidUpdate' + arguments);
    }
    componentWillUnmount() {
        console.log('Header' + ' componentWillUnmount' + arguments);
    }
    render() {
        console.log('Header' + 'rendering');
        return (
            <div>
            <div >
                <Progress progress={this.state.progress}></Progress>
            </div>
            < input
        type = "number" onChange={(e)=>{
                this.setState({progress:e.target.value})
            }}/>
            </div>
        )
    }
}
export default Header;