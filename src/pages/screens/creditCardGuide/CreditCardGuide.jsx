import "./CreditCardGuide.css";
import { useEffect, useState } from "react";

import BasicCard from "../../components/basicCard/BasicCard";
import MenuListItem from "../../components/menuListItem/MenuListItem.jsx";
import FeatureCard from "../../components/featureCard/FeatureCard.jsx";

import CustomSwiper from "../../../utils/customSwiper/CustomSwiper.jsx";

import ICONS from "../../helpers/Icons.jsx";
import SmallButton from "../../components/smallButton/SmallButton.jsx";

function CreditCardGuide() {
  const navPag = "-one";
  const [isSwiper, setIsSwiper] = useState(false);

  useEffect(() => {
    const applySwiperCSS = () => {
      (window.innerWidth < 1000) ? setIsSwiper(true) : setIsSwiper(false)
      console.log("Hello");
    }
    applySwiperCSS();
    window.addEventListener("resize", applySwiperCSS);

    return () => (window.removeEventListener("resize", applySwiperCSS))
  });

  return (
    <section className="card-guide">
      <aside className="card-type-details">
        <div className="card-types">
          <h1>Credit Card Types</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            expedita, dolore qui error ea accusantium perspiciatis. Vero atque
            vitae ab nobis in iusto eum voluptatibus, sed numquam dolorem enim
            dolores, saepe incidunt temporibus quia.
          </p>
          <ul className="card-list">
            <BasicCard content="Best overall" />
            <BasicCard content="Travel" />
            <BasicCard content="Cash Back" />
            <BasicCard content="Travel" />
            <BasicCard content="Cash" />
          </ul>
        </div>
        <div className="card-menu">
          <h1>Lorem Ipsum Dolor</h1>
          <ul className="menu-list">
            <MenuListItem content="Credit Card Type" />
            <MenuListItem content="Credit Card Issuer" />
            <MenuListItem content="Credit Level" />
          </ul>
        </div>
      </aside>
      <main className="features-card-details">
        <h1>Featured Credit Cards</h1>
        {
          (isSwiper) ? 
          <>
            <CustomSwiper mode = "guide" />
              <div className="feature-card-footer">
                  <div className="container">
                    <div className={`swiper-button-prev-unique${navPag} previous`}><img src={ICONS.RightArrow} alt="" /></div>
                    <div className={`swiper-pagination${navPag}`}></div>
                    <div className={`swiper-button-next-unique${navPag}`}><img src={ICONS.RightArrow} alt="" /></div>
                  </div>
              </div>
          </> : <div className="features-card-grid">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                </div>
        }  
        <SmallButton />
      </main>
    </section>
  );
}

export default CreditCardGuide;
