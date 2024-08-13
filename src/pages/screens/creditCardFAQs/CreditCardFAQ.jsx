import './CreditCardFAQ.css';

import QnaCard from '../../components/qnaCard/QnaCard';

import ICONS from "../../helpers/Icons.jsx";
import IMAGES from "../../helpers/Images.jsx";
import SmallButton from '../../components/smallButton/SmallButton.jsx';


function CreditCardFAQ() {
  return (
    <section className="credit-card-FAQ">
        <div className="FAQ-content">
            <h1>Credit Card FAQs</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, nam soluta totam odit inventore esse.</p>
            <div className="qna-container">
                <QnaCard />
                <QnaCard />
                <QnaCard />
                <QnaCard />
            </div>
        </div>
        <div className="FAQ-ad-banner">
            <img src={ICONS.CreditLogoAd} alt="" />
            <h1>GET YOUR CREDIT</h1>
            <div className="promotion-tag">
                <img src={ICONS.RightBullet} alt="" />
                <span>Absolutely free</span>
            </div>
            <img src={IMAGES.FAQAd} alt="" />
            <SmallButton />
        </div>
    </section>
  )
}

export default CreditCardFAQ