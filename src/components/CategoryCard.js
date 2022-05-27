import { Link } from "react-router-dom";
import { useQuiz } from "../context/quizContext";
import { GET_CATEGORY } from "../reducer/constant";

export const CategoryCard = ({ category }) => {
  const { quizDispatch } = useQuiz();

  const categoryName = category.title.toLowerCase();

  return (
    <div class="card basic-card">
      <div class="basic-card-container">
        <div class="basic-card-img-container">
          <img class="basic-card-img" src={category.img} alt={category.title} />
        </div>
        <div class="basic-card-des card-description">
          <h1 class="heading-1">{category.title}</h1>
          <p class="heading-2 font-xs">
            Participate in the quiz now and test your IQ in {category.title}
          </p>
          <div class="justify-between">
            <p class="heading-3">5 Questions</p>
            <Link to="/instructions">
              <button
                class="hero-btn"
                onClick={() =>
                  quizDispatch({ type: GET_CATEGORY, payload: categoryName })
                }
              >
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
