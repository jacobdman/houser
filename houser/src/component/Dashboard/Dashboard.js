import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom';
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor () {
        super ()
        this.state = {
            houses: [],
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:4000/api/houses")
        .then(result => this.setState({ houses: result.data}))
    }

    deleteHouse = (id) => { 

        axios.delete('http://localhost:4000/api/house', {
            data: {
                address: id
            }
        })
        .then( () =>
            this.componentDidMount()
        )
    }

    render(){
        return (
            <div className='Dashboard'>
                <div className='Dashtop'>
                    <div className='Title'>Dashboard</div>
                    <Link to='/wizard/step1'><button className='Propbutt'>Add New Property</button></Link>
                </div>
                <div className='divider'>
                    {this.state.houses.map(( house ) => (
                        <div>
                            <House house={house} handleClick={this.deleteHouse}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



