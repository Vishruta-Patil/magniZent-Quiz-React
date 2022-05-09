import heroImg from "../../assets/bg-quiz.svg"
import { categoryData } from "../../data/categoryData"
import { CategoryCard } from "../../components/CategoryCard"
import "./home.css"
import MainTitle from "../../components/common/mainTitle"


const Home = () => {
    return (
        <div class="container">
            <div class="hero-container">
                <div class="img-header-container flex justify-center">
                    <img class="hero-img" src={heroImg} alt="hero-img" />
                    <div class="content flex-column secondary-color">
                        <div class="primary-color font-lg">
                            Hello and Welcome to magniZent Quiz.
                        </div>
                        <div class="inner-header-content flex-column">
                            <p class="font-md sub-title">
                                Want to test your Knowledge? You have landed perfect place!
                            </p>
                            <p class="font-md">magniZent has 3 variants in the quiz</p>
                            <a href="#categories-container"
                            ><button class="hero-btn">Explore Quizzes</button></a
                            >
                        </div>
                    </div>
                </div>

                <div id="categories-container" class="categories-container">
                    <MainTitle>Categories</MainTitle>
                    <div class="categories-inner-box flex justify-center flex-align-gap wrap">
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