import { Link } from "react-router-dom"

export const CategoryCard = ({category}) => {
    return (
        <div class="card basic-card">
            <div class="basic-card-container">
                <div class="basic-card-img-container">
                    <img
                        class="basic-card-img"
                        src={category.img}
                        alt={category.title}
                    />
                </div>
                <div class="basic-card-des card-description">
                    <h1 class="heading-1">{category.title}</h1>
                    <p class="heading-2">
                        Participate in the knowlegable quiz and test your IQ in
                        {category.title}
                    </p>
                    <div class="justify-between">
                        <p class="heading-3">10 Questions</p>
                        <Link to="/instructions"
                        ><button class="hero-btn">Start Quiz</button></Link
                        >
                    </div>
                </div>
            </div>
        </div>
    )
}