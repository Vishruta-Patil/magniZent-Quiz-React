import { QuizDataType } from "./quizData.types"

export const quizData : QuizDataType = {
    technology: [
        {
            id: 1,
            question_no: 1,
            question: "About how many computer languages are in use?",
            options: ["20", "50", "5000", "2000"],
            ans: "2000",
            category: "technology",
            link: {
                prev: "rules",
                next: "question 2"
            } 
        },
        {
            id: 2,
            question_no: 2,
            question: "Which of these is not an early computer?",
            options: ["UNIVAC", "SAGE", "ENIAC", "NASA"],
            ans: "NASA",
            category: "technology",
            link: {
                prev: "question 1",
                next: "question 3"
            } 
        },
        {
            id: 3,
            question_no: 3,
            question: "Who founded Apple Computer?",
            options: ["Sundar Pichai", "Sheryl Sandberg", "Steve Jobs", "Bill Gates"],
            ans: "Steve Jobs",
            category: "technology",
            link: {
                prev: "question 2",
                next: "question 4"
            } 
        },
        {
            id: 4,
            question_no: 4,
            question: "Which of these is not a peripheral, in computer terms?",
            options: ["keyboard", "motherboard", "mouse", "monitor"],
            ans: "motherboard",
            category: "technology",
            link: {
                prev: "question 3",
                next: "question 4"
            } 
        },
        {
            id: 5,
            question_no: 5,
            question: "What does the Internet prefix WWW stand for?",
            options: ["Wide Width Wickets", "Western Washington World", "Worldwide Weather", "World Wide Web"],
            ans: "World Wide Web",
            category: "technology",
            link: {
                prev: "question 4",
                next: "result"
            } 
        }
    ],
    sports: [
        {
            id: 1,
            question_no: 1,
            question: "Rovers Cup is related to which of the following sports?",
            options: ["Football", "Cricket", "Hockey", "Tennis"],
            ans: "Football",
            category: "sports",
            link: {
                prev: "rules",
                next: "question 2"
            } 
        },
        {
            id: 2,
            question_no: 2,
            question: "Who among the following is the first Indian to score a century in Indian Premier League (IPL)?",
            options: ["Gautam Gambhir", "Manish Pandey", "Sachin Tendulkar", "Rahul Dravid"],
            ans: "Manish Pandey",
            category: "sports",
            link: {
                prev: "question 1",
                next: "question 3"
            } 
        },
        {
            id: 3,
            question_no: 3,
            question: "The name of Professor Guru Dutt Sondhi is known behind the foundation of which among the following?",
            options: ["Olympic Association of India", "Asian Games Federation", "Indian Premier League", "Indian Badminton League"],
            ans: "Asian Games Federation",
            category: "sports",
            link: {
                prev: "question 2",
                next: "question 4"
            } 
        },
        {
            id: 4,
            question_no: 4,
            question: "Who is the current President of the International Shooting Sport Federation?",
            options: ["Olegario Vazquez Rana", "Carlos Slim", "Jorge Hank Rhon", "Alfonso Romo"],
            ans: "Olegario Vazquez Rana",
            category: "sports",
            link: {
                prev: "question 3",
                next: "question 5"
            } 
        },
        {
            id: 5,
            question_no: 5,
            question: "Which of the following nation was not a part of the Seven founding members of International Hockey Federation?",
            options: ["Austria", "France", "USA", "Spain"],
            ans: "USA",
            category: "sports",
            link: {
                prev: "question 4",
                next: "result"
            } 
        },
    ],
    astronomy: [
        {
            id: 1,
            question_no: 1,
            question: "The day on which the Sun’s direct rays cross the celestial equator is called:",
            options: ["the ecliptic", "the solstice", "the equinox", "the aphelion"],
            ans: "the equinox",
            category: "astronomy",
            link: {
                prev: "rules",
                next: "question 1"
            } 
        },
        {
            id: 2,
            question_no: 2,
            question: "Who invented the telescope?",
            options: ["Johannes Kepler", "Hypatia", "Galileo", "Hans Lippershey"],
            ans: "Hans Lippershey",
            category: "astronomy",
            link: {
                prev: "question 1",
                next: "question 3"
            } 
        },
        {
            id: 3,
            question_no: 3,
            question: "Which of these objects is the farthest from the Sun?",
            options: ["Neptune", "Kuiper belt", "90377 Sedna", "Saturn"],
            ans: "90377 Sedna",
            category: "astronomy",
            link: {
                prev: "question 2",
                next: "question 4"
            } 
        },
        {
            id: 4,
            question_no: 4,
            question: "What is the smallest planet in the solar system by mass?",
            options: ["Mars", "Mercury", "Jupiter", "Earth"],
            ans: "Mercury",
            category: "astronomy",
            link: {
                prev: "question 3",
                next: "question 5"
            } 
        },
        {
            id: 5,
            question_no: 5,
            question: "What is the visible part of the Sun called?",
            options: ["the photosphere", "the stratosphere", "the atmosphere", "the lithosphere"],
            ans: "the photosphere",
            category: "astronomy",
            link: {
                prev: "question 4",
                next: "result"
            } 
        }
    ],
}