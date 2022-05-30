import { GET_CATEGORY, SET_QUESTION_NUMBER, RESET_DATA, GET_RESULT } from "./constant"

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
            }
        case GET_RESULT:
            return {
                ...state,
                result: action.payload
            }
    }
}