import { GET_CATEGORY, SET_QUESTION_NUMBER, RESET_DATA, GET_RESULT, SET_ANSWER_LIST, RESET_CATEGORY_GAME } from "./constant"

export const quizReducer = (state, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_QUESTION_NUMBER:
            return {
                ...state,
                questionNo:action.payload
            }
        case RESET_DATA:
            return {
                ...state,
                category: "technology",
                questionNo: 1,
                result: 0,
                answerList: []
            }
        case RESET_CATEGORY_GAME:
            return {
                ...state,
                questionNo: 1,
                result: 0,
                answerList: []
            }
        case GET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        case SET_ANSWER_LIST:
            return {
              ...state,
              answerList: [...state.answerList, action.payload]  
            }
    }
}

/*
answerList : [{q_id: 1, selected_opt: [{ind: 1, value: "abc"}]}] 

ansObj: {[q_id]:{
    selected_opt: [{ind: 1, value: "abc"}]}]
}}
*/