// import heroImg from "../../assets/bg-quiz.svg" 
import { categoryData } from "../../data/categoryData"
import { CategoryCard } from "../../components/CategoryCard"
import "./home.css"
import MainTitle from "../../components/common/mainTitle"
import { useEffect } from "react"
import { useQuiz } from "../../context/quizContext"
import { RESET_DATA } from "../../reducer/constant"

const logo: string = require("../../assets/bg-quiz.svg").default;

const Home = () => {
    const {quizDispatch} = useQuiz()
    
    useEffect(() => {
        quizDispatch({type: RESET_DATA})
    }, [])

    // doubt => dependency arr and [quizState]

    return (
        <div className="container">
            <div className="hero-container">
                <div className="img-header-container flex justify-center">
                    <img className="hero-img" src={logo} alt="hero-img" />
                    <div className="content flex-column secondary-color">
                        <div className="primary-color font-lg">
                            Hello and Welcome to magniZent Quiz.
                        </div>
                        <div className="inner-header-content flex-column">
                            <p className="font-sm sub-title">
                                Want to test your Knowledge? You have landed perfect place!
                            </p>
                            <p className="font-sm">magniZent has 3 variants in the quiz</p>
                            <a href="#categories-container"
                            ><button className="hero-btn">Explore Quizzes Now</button></a
                            >
                        </div>
                    </div>
                </div>

                <div id="categories-container" className="categories-container">
                    <MainTitle>Categories</MainTitle>
                    <div className="categories-inner-box flex justify-center flex-align-gap wrap">
                        {categoryData.map(categoryItem => (
                            <CategoryCard category={categoryItem}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home