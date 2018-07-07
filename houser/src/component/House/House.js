import React from 'react'
import './House.css'

export default function House (props) {

        return (
            <div className='House'>
                <div>
                    <div className='box'>
                        <img className='boximg' src={props.house.img}/>
                    </div>
                    <div className='box'>
                        <p>Name: {props.house.name}</p>
                        <p>Address: {props.house.address}</p>
                        <p>City: {props.house.city}</p>
                        <p>State: {props.house.state}</p>
                        <p>Zip: {props.house.zipcode}</p>
                    </div>
                    <div className='box'>
                        <p>Mortgage: ${props.house.mortgage}</p>
                        <p>Rent: ${props.house.rent}</p>
                    </div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII=" className='delete' onClick={ () => props.handleClick(props.house.address)} />
                </div>
            </div>
        )
}