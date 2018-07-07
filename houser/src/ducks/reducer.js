const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    img: '',
    mortgage: '',
    rent: '',
}

const UPDATE_LOCATION = 'UPDATE_LOCATION'
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_MONEY = 'UPDATE_MONEY'
const CLEAR = 'CLEAR'

export default function reducer( state = initialState, action ){ 
    switch( action.type ){
        
        case UPDATE_LOCATION:
        return { ...state, ...action.payload };

        case UPDATE_IMAGE:
        return Object.assign( {}, state, { img: action.payload })

        case UPDATE_MONEY:
        return { ...state, ...action.payload };

        case CLEAR:
        return action.payload

        default:
        return state;
    }
}

export function updateLocation ( location ) {
    return {
        type: UPDATE_LOCATION,
        payload: location
    }
}

export function updateImg ( img ) {
    return {
        type: UPDATE_IMAGE,
        payload: img
    }
}

export function updateMoney ( money ) {
    return {
        type: UPDATE_MONEY,
        payload: money
    }
}

export function clear () {
    return {
        type: CLEAR,
        payload: initialState
    }
}