import {ADD_LOGIN_USER} from '../constant'

//创建增加一个人的action动作对象
export const addLoginUser = loginUserObj => ({type:ADD_LOGIN_USER,data:loginUserObj})

export const addLoginUserAsync = (data) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(addLoginUser(data))
		},500)
	}
}