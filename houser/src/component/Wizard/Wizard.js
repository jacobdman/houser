import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { connect } from 'react-redux';
import { clear } from '../../ducks/reducer';
import './Wizard.css'

export function Wizard (props) {
        return (
            <div className='main'>
                <div className='wiz_header'>
                    <h2>Add New Listing</h2>
                    <button onClick={ () => {
                        props.clear();
                        props.history.push('/')
                    }}>Cancel</button>
                </div>
                <Route component={StepOne} path='/wizard/step1'/>
                <Route component={StepTwo} path='/wizard/step2'/>
                <Route component={StepThree} path='/wizard/step3'/>
            </div>
        )
    }


export default connect (null, {clear}) (Wizard);