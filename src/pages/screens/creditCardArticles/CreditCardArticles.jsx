import './CreditCardArticles.css';

import ReviewArticleCard from '../../components/reviewArticleCard/ReviewArticleCard.jsx'
import ArticleCard from '../../components/articleCard/ArticleCard.jsx';
import SmallButton from '../../components/smallButton/SmallButton.jsx';

function CreditCardArticles() {
  return (
    <section className="credit-card-articles">
      <h1>Latest Credit Card Articles</h1>
      <ul className="review-article-card">
        <ReviewArticleCard myStyle="end"/>
        <ReviewArticleCard />
      </ul>
      <ul className="review-card">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ul>
      <SmallButton />
    </section>
  )
}

export default CreditCardArticles