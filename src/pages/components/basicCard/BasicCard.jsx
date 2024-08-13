import './BasicCard.css';

import ICONS from "../../helpers/Icons.jsx";

function BasicCard(props) {
    const { icon = '$', content, heading = '', cardWidth = '100%', category='' } = props;
  return (
    <li className='basic-card' style={{width: cardWidth}}>
        <div className={icon === '$' ? 'circle' : 'orange circle'}>
            { icon }
        </div>
        {
          (category) ?
            <>
              <div className="card-picks-content">
                <h3>{category.toUpperCase()}</h3>
                <p className="content">{content}</p>
              </div>
              <img className='card-pick-icon' src={ICONS.RightArrow} alt="" />
            </>
          :
          <p className='content'>{content.toUpperCase()}</p>
        }
        

    </li>
  )
}

export default BasicCard