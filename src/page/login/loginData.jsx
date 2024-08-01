let loginData = {
    inputs : {
        userIndex: '',
        userName: '',
        userId: '',
        userPw: '',
        userPhone: ''
    },
    datas : [
    {
        index : 1,
        userName : '김금주',
        userId : 'keumju@mms.com',
        userPw : '123456',
        userPhone : '010-0000-0000'
    },{
        index : 2,
        userName : '최미나',
        userId : 'mina@mms.com',
        userPw : '123456',
        userPhone : '010-0000-0000'
    },{
        index : 3,
        userName : '정단비',
        userId : 'danbi@mms.com',
        userPw : '123456',
        userPhone : '010-0000-0000'
    },{
        index : 2,
        userName : '박채민',
        userId : 'chaemin@mms.com',
        userPw : '123456',
        userPhone : '010-0000-0000'
    }
]}

const reducer = (state, action)=>{
    switch(action.type){
        case "create" : //추가
            return{
                inputs : loginData.inputs,
                datas : state.datas.concat(action.data)
            }
        case "edit" : //수정
            return{
                ...state,
                datas : state.datas.map((item)=>item.index === action.index ? {...item, userPw:action.userPw, text:action.txt} : item)
            }
        default :
            return state
    }
}

export {loginData, reducer}