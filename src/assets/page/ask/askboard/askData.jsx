const Contents= {
    inputs : {
    tit:'',
    content:'',
    category:''
  },
  item : [{
    id:1,
    tit:'이메일을 바꾸고싶어요',
    content:'이메일은 어디서 바꾸나요?',
    category : '일반문의',
    createDate : '2024. 05. 07',
    ansur : false
  },{
    id:2,
    tit:'기초문제3',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 3번이 답이 맞는데 틀리다고 나옵니다.',
    category : '오답신고',
    createDate : '2024. 05. 07',
    ansur : false
  },{
    id:3,
    tit:'기초문제1',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 1번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 05. 07',
    ansur : false
  },{
    id:4,
    tit:'기초문제2',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 2번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 05. 07',
    ansur : false
  },{
    id:5,
    tit:'로그인 할 때 오류가 뜹니다',
    content:'로그인하면 오류창이 뜨네요',
    category : '일반문의',
    createDate : '2024. 05. 07',
    ansur : false
  },{
    id:6,
    tit:'기초문제3',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 3번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 05. 07',
    ansur : false
  }]
}
const reducer = (state, action)=>{

      switch(action.type){
          case 'create' :
              return{
                  inputs : Contents.inputs,
                  item : state.item.concat(action.dic)
              }
          case 'remove' :
              return{
                  ...state,
                  item:state.item.filter((item)=>item.id !== action.id)
              }
          case 'edit' :
              return{
                  ...state,
                  item: state.item.map((item)=>item.id===action.id?
                      {...item,
                        content : action.content,
                      } :item)
              }
               case "search" : 
               return{
                ...state,
                item : state.item.filter((item)=>{return(
                    item.tit.toLowerCase().includes(action.text.toLowerCase()) ||
                    item.content.toLowerCase().includes(action.text.toLowerCase())
                )})
               }
              default :
              return state
      }
  }
  
  export {Contents, reducer}