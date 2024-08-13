import './FeatureCard.css';

import MenuListItem from '../menuListItem/MenuListItem';

import IMAGES from "../../helpers/Images.jsx";
import SmallButton from '../smallButton/SmallButton.jsx';
import FLEX from '../../../utils/styles/Flex.jsx';

function FeatureCard(props) {
  const { maxWidth = '' } = props;
  return (
    <div className={ (maxWidth) ? 'feature-card max-width' : 'feature-card' }>
        <img className='credit-card-image' src={IMAGES.GreenCC} alt="" />
        <h3>Upgrade Cash Rewards Visa®</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nihil dolores corporis vel dolorem tempore.</p>
        <div className="credit-card-cta" style={{...FLEX.centered, ...FLEX.col}}>
            <SmallButton />
            <a href="#">on Company's secure website</a>
        </div>
        <ul className="menu-list">
            <MenuListItem content="Annual Fee" iconText="$0" />
            <MenuListItem content="Intro APR" iconText="$0" />
            <MenuListItem content="Ongoing APR" iconText="$0" />
            <MenuListItem content="Balance Transfer" iconText="$0" />
        </ul>
        <a className="detail" href="#">See Full Card details</a>
    </div>
  )
}

export default FeatureCard