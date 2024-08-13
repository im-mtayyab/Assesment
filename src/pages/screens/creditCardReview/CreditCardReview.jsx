import './CreditCardReview.css'

import MenuButton from '../../components/menuButtons/MenuButton.jsx'

function CreditCardReview() {
  return (
    <section className="credit-card-review">
      <div className="credit-card-review-grid">
        <div className="review-content">
          <h1>Credit Card Reviews</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eos quam rem expedita vero est dolor explicabo quas optio fugiat tempora voluptates alias quae soluta tenetur saepe, dolorem quod aperiam reiciendis et. Saepe, incidunt?</p>
        </div>
        <ul className="review-menu-list">
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
          <MenuButton />
        </ul>
      </div>
    </section>
  )
}

export default CreditCardReview