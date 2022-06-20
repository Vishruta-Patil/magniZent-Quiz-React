export type Link = {
    prev: string,
    next: string
}

export type Question = {
    id: number,
    question_no: number,
    question: string,
    options: string[],
    ans: string,
    category: string,
    link: Link
}

export interface QuizDataType {
    technology: Question[],
    sports: Question[],
    astronomy: Question[]
}





