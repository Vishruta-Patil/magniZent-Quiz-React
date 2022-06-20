export type QuizState = {
    category: string,
    questionNo: number,
    result: number,
    answerList: string[]
}

type CategoryGame = {
    questionNo: number,
    result: number,
    answerList: string[]
}

export type QuizAction = 
    {
        type: "GET_CATEGORY",
        payload: string
    } | 
    {
        type: "SET_QUESTION_NUMBER",
        payload: number
    } |
    {
        type: "RESET_DATA",
    } | 
    {
        type: "RESET_CATEGORY_GAME"
    } | 
    {
        type: "GET_RESULT",
        payload: number
    } |
    {   
        type: "SET_ANSWER_LIST",
        payload: string
    }



