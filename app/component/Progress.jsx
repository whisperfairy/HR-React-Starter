/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './style.scss'
class Progress extends PureComponent {

    constructor(props) {
        super(props);
        console.log('progress' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('progress' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('progress' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('progress' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('progress' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('progress' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('progress' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('progress' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('progress' + 'rendering');
        return (
            <div>
                <div className="container">
                    <div className={"circle_"+this.props.progress}></div>
                </div>
            </div>
        )
    }
}
export default Progress;