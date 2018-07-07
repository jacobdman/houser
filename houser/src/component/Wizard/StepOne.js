import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateLocation } from '../../ducks/reducer'
import './Wizard.css'

export class StepOne extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }
    }

    componentDidMount() {
        let { name, address, city, state, zip } = this.props
        this.setState({ name, address, city, state, zip }),
        console.log(this.props, this.state)
    }
    
    handleChangeName = (val) => {
        this.setState({ name: val })
    }

    handleChangeAddress = (val) => {
        this.setState({ address: val })
    }

    handleChangeCity = (val) => {
        this.setState({ city: val })
    }

    handleChangeState = (val) => {
        this.setState({ state: val })
    }

    handleChangeZipcode = (val) => {
        this.setState({ zipcode: val })
    }
    
    render(){
        return (
            <div className='input_container'>
                <p>Name</p>
                <input value={this.state.name} onChange={(e) => this.handleChangeName(e.target.value)}></input>
                <p>Address</p>
                <input value={this.state.address} onChange={(e) => this.handleChangeAddress(e.target.value)}></input>
                <p>City</p>
                <input value={this.state.city} onChange={(e) => this.handleChangeCity(e.target.value)}></input>
                <p>State</p>
                <input value={this.state.state} onChange={(e) => this.handleChangeState(e.target.value)}></input>
                <p>Zipcode</p>
                <input type='number' value={this.state.zipcode} onChange={(e) => this.handleChangeZipcode(e.target.value)}></input>
                <button className='nextButt' onClick={_ => {
                    this.props.updateLocation(this.state);
                    this.props.history.push('/wizard/step2');
                }}>Next Step</button>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { name, address, city, state, zipcode } = reduxState

    return {
        name,
        address,
        city,
        state,
        zipcode
    }
}

export default connect (mapStateToProps, {updateLocation}) (StepOne);