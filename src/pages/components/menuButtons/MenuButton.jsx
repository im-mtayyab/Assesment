import './MenuButton.css';

import { useState } from 'react';

function MenuButton() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <li className="item">
            <button 
                className={`menu-btn ${isClicked ? "back-blue" : ''}`}
                onClick={() => (setIsClicked(!isClicked))}
            >Best</button></li>
    )
}

export default MenuButton