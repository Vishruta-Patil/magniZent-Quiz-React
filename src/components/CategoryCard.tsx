import { CategoryInterface } from "data/categoryData";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/quizContext";
import { GET_CATEGORY } from "../reducer/constant";

export const CategoryCard = ({ category } : {category : CategoryInterface}) => {
  const { quizDispatch } = useQuiz();

  const categoryName = category.title.toLowerCase();

  return (
    <div className="card basic-card">
      <div className="basic-card-container">
        <div className="basic-card-img-container">
          <img className="basic-card-img" src={category.img} alt={category.title} />
        </div>
        <div className="basic-card-des card-description">
          <h1 className="heading-1">{category.title}</h1>
          <p className="heading-2 font-xs">
            Participate in the quiz now and test your IQ in {category.title}
          </p>
          <div className="justify-between">
            <p className="heading-3">5 Questions</p>
            <Link to="/instructions">
              <button
                className="hero-btn"
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
