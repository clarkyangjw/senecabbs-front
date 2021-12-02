import {ADD_USER_INFO} from '../../utils/constant'

//创建增加一个人的action动作对象
export const addUserInfo = userInfoObj => ({type:ADD_USER_INFO,data:userInfoObj})

export const addUserInfoAsync = (data) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(addUserInfo(data))
		},500)
	}
}