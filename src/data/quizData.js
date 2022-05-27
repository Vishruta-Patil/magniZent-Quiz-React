export const quizData = {
    technology: [
        {
            id: 1,
            question_no: 1,
            question: "This is technology question no 1",
            options: ["option 1a", "option 1b", "option 1c", "option 1d"],
            ans: "option 1b",
            category: "technology",
            link: {
                prev: "rules",
                next: "question 2"
            } 
        },
        {
            id: 2,
            question_no: 2,
            question: "This is technology question no 2",
            options: ["option 2a", "option 2b", "option 2c", "option 2d"],
            ans: "option 2c",
            category: "technology",
            link: {
                prev: "question 1",
                next: "question 3"
            } 
        },
        {
            id: 3,
            question_no: 3,
            question: "This is technology question no 3",
            options: ["option 3a", "option 3b", "option 3c", "option 3d"],
            ans: "option 3c",
            category: "technology",
            link: {
                prev: "question 2",
                next: "question 4"
            } 
        },
        {
            id: 4,
            question_no: 4,
            question: "This is technology question no 4",
            options: ["option 4a", "option 4b", "option 4c", "option 4d"],
            ans: "option 4c",
            category: "technology",
            link: {
                prev: "question 3",
                next: "result"
            } 
        }
    ],
    sports: [
        {
            id: 3,
            question_no: 1,
            question: "This is sports question no 1",
            options: ["option 1a", "option 1b", "option 1c", "option 1d"],
            ans: "option 1a",
            category: "sports",
            link: {
                prev: "rules",
                next: "question 1"
            } 
        },
        {
            id: 4,
            question_no: 2,
            question: "This is sports question no 2",
            options: ["option 2a", "option 2b", "option 2c", "option 2d"],
            ans: "option 2d",
            category: "sports",
            link: {
                prev: "question 1",
                next: "result"
            } 
        }
    ],
    astronomy: [
        {
            id: 3,
            question_no: 1,
            question: "This is astronomy question no 1",
            options: ["option 1a", "option 1b", "option 1c", "option 1d"],
            ans: "option 1a",
            category: "astronomy",
            link: {
                prev: "rules",
                next: "question 1"
            } 
        },
        {
            id: 4,
            question_no: 2,
            question: "This is astronomy question no 2",
            options: ["option 2a", "option 2b", "option 2c", "option 2d"],
            ans: "option 2d",
            category: "astronomy",
            link: {
                prev: "question 1",
                next: "result"
            } 
        }
    ],
}