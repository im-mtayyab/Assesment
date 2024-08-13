import "./CalculatorCard.css";
import IMAGES from "../../helpers/Images.jsx";

function CalculatorCard() {
    return (
        <li className='calculator-card'>
            <div className="calculator-content">
                <img src={IMAGES.CalculatorOne} alt="" />
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </li>
    )
}

export default CalculatorCard