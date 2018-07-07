import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { updateMoney } from '../../ducks/reducer';
import { clear } from '../../ducks/reducer';
import './Wizard.css'

export class StepThree extends Component {
    constructor () {
        super ()
        this.state = {
            mortgage: '',
            rent: '',
        }
    }

    componentDidMount() {
        let { mortgage, rent } = this.props
        this.setState({ mortgage, rent })
    }

    handleChangeMortgage = (val) => {
        this.setState({ mortgage: val })
    }

    handleChangeRent = (val) => {
        this.setState({ rent: val })
    }

    createHouse = (name, address, city, state, zipcode, img, mortgage, rent) => {
        axios.post('http://localhost:4000/api/house', {
          data: {
            name: name, 
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            img: img,
            mortgage: mortgage,
            rent: rent
          }
        })
        .then(result => {
            this.props.clear()
            this.props.history.push('/')
        })
    }

    render(){
        return (
            <div className='input_container'>
                <p>Monthly Mortgage</p>
                <input type='number' value={this.state.mortgage} onChange={(e) => this.handleChangeMortgage(e.target.value)}></input>
                <p>Desired Rent</p>
                <input type='number' value={this.state.rent} onChange={(e) => this.handleChangeRent(e.target.value)}></input>
                <button className='prevButt' onClick={ () => {
                    this.props.updateMoney(this.state);
                    this.props.history.push('/wizard/step2');
                }}>Previous Step</button>
                <button className='complete' onClick={() => {
                    this.createHouse(this.props.name, this.props.address, this.props.city, this.props.state, this.props.zipcode, this.props.img, this.state.mortgage, this.state.rent)
                }}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return { 
        state
     }
}

export default connect (mapStateToProps, {updateMoney, clear}) (StepThree);