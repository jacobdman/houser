import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateImg } from '../../ducks/reducer'
import './Wizard.css'

export class StepTwo extends Component {
    constructor () {
        super ()
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        let { img } = this.props
        this.setState({ img })
    }

    handleChangeImg = (val) => {
        this.setState({ img: val })
    }

    
    render(){
        return (
            <div className='input_container'>
                <p>Image URL</p>
                <input value={this.state.img} onChange={(e) => this.handleChangeImg(e.target.value)}></input>
                <button className='prevButt' onClick={ () => {
                    this.props.updateImg(this.state.img);
                    this.props.history.push('/wizard/step1');
                }}>Previous Step</button>
                <button className='nextButt' onClick={ () => {
                    this.props.updateImg(this.state.img);
                    this.props.history.push('/wizard/step3');
                }}>Next Step</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { img } = state

    return { img }
}

export default connect (mapStateToProps, {updateImg}) (StepTwo);