import "./MenuListItem.css";

import ICONS from "../../helpers/Icons.jsx";

function MenuListItem(props) {
  const { iconText = "", content } = props;
  return (
    <li className="menu-list-item">
      <a href="">{content}</a>
      {!iconText ? <img src={ICONS.RightArrow} alt="" /> : <p>{iconText}</p>}
    </li>
  );
}

export default MenuListItem;
