import './ReviewArticleCard.css';

import IMAGES from "../../helpers/Images.jsx";

function ReviewArticleCard({myStyle = ""}) {
  return (
    <li className={`large-article-card ${(myStyle === "") ? "" : "end"}`}>
        <div className="card-image">
        <img className="article-image" src={IMAGES.ArticleOne} alt="" />
        </div>
        <div className="review-article-card-content">
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit.</p>
          <a href="#">See all Finance article</a>
        </div>
    </li>
  )
}

export default ReviewArticleCard