import "./Footer.css";

import FooterColumn from "../../components/footerColumn/FooterColumn.jsx";

import ICONS from "../../helpers/Icons.jsx";

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <FooterColumn />
        <FooterColumn />
        <FooterColumn />
        <FooterColumn />
      </div>
      <div className="footer-social-links-button">
        <ul className="footer-social-links">
          <li><a href=""><img src={ICONS.Facebook} alt="" /></a></li>
          <li><a href=""><img src={ICONS.Twitter} alt="" /></a></li>
          <li><a href=""><img src={ICONS.Linkedin} alt="" /></a></li>
          <li><a href=""><img src={ICONS.Web} alt="" /></a></li>
        </ul>
        <ul className="footer-app-buttons">
          <li><button aria-label="Download on the App Store">
            <div className="footer-button-content">
              <img src={ICONS.AppleLogo} alt="" />
              <div className="footer-button-text">
                <div>Download on the</div>
                <div>App Store</div>
              </div>
            </div>
          </button></li>

          <li><button aria-label="Download on the App Store">
            <div className="footer-button-content">
              <img src={ICONS.Playstore} alt="" />
              <div className="footer-button-text">
                <div>Get it on</div>
                <div>Google Play</div>
              </div>
            </div>
          </button></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-rights">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        </div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae eveniet neque corporis nostrum nam alias reiciendis impedit temporibus dolorem quidem culpa asperiores accusamus odit exercitationem veritatis explicabo corrupti, magnam hic quisquam quasi commodi ipsam aspernatur eum. Voluptates mollitia debitis magni laborum natus, animi dolor rem cum aut saepe corrupti?</div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto enim aperiam sit quia, optio sapiente tenetur porro quod nam ipsum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consequatur cumque vero laudantium aliquam sequi placeat labore possimus architecto quidem?</div>
      </div>
    </footer>
  )
}

export default Footer