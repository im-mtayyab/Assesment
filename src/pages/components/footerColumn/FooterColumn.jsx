import { useState } from "react";

import "./FooterColumn.css";

import ICONS from "../../helpers/Icons.jsx";

function FooterColumn(props) {
    const [footerMenuOpen, setFoorterMenuOpen] = useState(false);
    const { heading = "Support", cellItems = ['Contact Us', 'Help', 'Privacy Policy', 'Privacy Notice', 'California Residents', 'Terms of Service'] } = props;
  return (
        <>
            <ul className="footer-column">
                <h3>{heading}</h3>
                {
                    cellItems.map((item, index) => (<li key={index}><a href="#">{item}</a></li>))
                }
            </ul>
            <div className="footer-menu">
                <button className='menu-button' onClick={() => { setFoorterMenuOpen(!footerMenuOpen) }}>
                    <span className="menu-heading">{heading}</span> 
                    <span className={ (!footerMenuOpen) ? "" : "rotation-full" }><img src={ICONS.DownArrow} alt="" /></span>
                </button>
                {
                   (footerMenuOpen) ?
                    <div className="footer-column-item">
                        {cellItems.map((item, index) => (<div key={index} className="menu-content"><a href="#">{item}</a></div>))}
                    </div>
                    : null
                }
            </div>
        </>
  )
}

export default FooterColumn