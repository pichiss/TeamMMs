const Contents= {
    inputs : {
    tit:'',
    content:'',
    category:'',
  },
  items : [{
    id: 0,
    tit:'이메일을 바꾸고싶어요',
    content:'이메일은 어디서 바꾸나요?',
    category : '일반문의',
    createDate : '2024. 05. 07',
    ansur : true,
    ansText : ''
  },{
    id:1,
    tit:'기초문제3',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 3번이 답이 맞는데 틀리다고 나옵니다.',
    category : '오답신고',
    createDate : '2024. 06. 08',
    ansur : false,
    ansText : ''
  },{
    id:2,
    tit:'기초문제1',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 1번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 07. 09',
    ansur : false,
    ansText : ''
  },{
    id:3,
    tit:'기초문제2',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 2번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 07. 07',
    ansur : false,
    ansText : ''
  },{
    id:4,
    tit:'로그인 할 때 오류가 뜹니다',
    content:'로그인하면 오류창이 뜨네요',
    category : '일반문의',
    createDate : '2024. 07. 21',
    ansur : false,
    ansText : ''
  },{
    id:5,
    tit:'기초문제3',
    content:'5학년 2학기 2. 직육면체의 성질에 기초문제 3번 모르겠어요',
    category : '학습질문',
    createDate : '2024. 07. 23',
    ansur : false,
    ansText : ''
  }]
}
const reducer = (state, action)=>{

      switch(action.type){
          case 'create' :
              return{
                  inputs : Contents.inputs,
                  items : state.items.concat(action.item)
              }
          case 'remove' :
              return{
                  ...state,
                  items:state.items.filter((item)=>item.id !== action.id)
              }
          case 'edit' :
              return{
                  ...state,
                  items: state.items.map((item)=>item.id===action.id?
                      {...item,
                        content : action.content,
                        ansur : true
                      } :item)
              }
          case 'ansure' :
              return{
                  ...state,
                  items: state.items.map((item)=>item.id===action.id?
                      {...item,
                        ansur : action.ansur,
                        ansText : action.ansText
                      } :item)
              }      
               case "search" : 
               return{
                ...state,
                items : state.items.filter((item)=>{return(
                    item.tit.toLowerCase().includes(action.text.toLowerCase()) ||
                    item.content.toLowerCase().includes(action.text.toLowerCase())
                )})
               }
              default :
              return state
      }
  }
  
  export {Contents, reducer}