import {ADD_LOGIN_USER} from '../../utils/constant'

const initState = {}

export default function loginUserReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
		case ADD_LOGIN_USER: 
			return data
		default:
			return preState
	}
}