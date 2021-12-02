import {ADD_USER_INFO} from '../../utils/constant'

const initState = {}

export default function userInfoReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
		case ADD_USER_INFO: 
			return data
		default:
			return preState
	}
}