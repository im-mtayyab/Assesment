import "./CreditCardCalculator.css";

import CustomSwiper from "../../../utils/customSwiper/CustomSwiper.jsx";

import ICONS from "../../helpers/Icons.jsx";

function CreditCardCalculator() {
  const navPag = "-two";
  return (
    <section className="credit-card-calculator">
      <div>
        <div className="calculator-header">
          <h1>Credit Card Calculators</h1>
          <div className="card-pagination" style={{width: '3rem'}}>
            <div className={`swiper-button-prev-unique${navPag} previous`}><img src={ICONS.RightArrow} alt="" /></div>
            <div className={`swiper-button-next-unique${navPag}`}><img src={ICONS.RightArrow} alt="" /></div>
          </div>
        </div>
        <CustomSwiper swiperClass = "credit-card-swiper" slidesView = "3" navPag = "-two" mode = "calculator" />
        <div className="credit-card-pagination">
          <div>
            <div className={`swiper-pagination${navPag}`}></div>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default CreditCardCalculator;
