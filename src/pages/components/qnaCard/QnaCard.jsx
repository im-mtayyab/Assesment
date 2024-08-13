import { useState } from 'react';

import './QnaCard.css';

import ICONS from "../../helpers/Icons.jsx";

function QnaCard() {
    const [qnaOpen, setQNAOpen] = useState(false);
  return (
    <div className="qna">
        <div className="qna-header">
            <button className={ `qna-button ${qnaOpen ? "qna-opened" : "" }` } onClick={() => { setQNAOpen(!qnaOpen) }}>
                <span className="qna-q">My Question Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laboriosam. Delectus, deserunt perferendis?</span> 
                <span className={ (!qnaOpen) ? "" : "rotation" }><img src={ICONS.RightArrow} alt="" /></span>
            </button>
        </div>
        {
            (qnaOpen) ? 
            <div className="qna-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque odio voluptate voluptatem voluptas officiis vitae doloremque distinctio aliquam, provident a ipsa, molestias nesciunt magnam tempora eaque illo optio quis temporibus, culpa sapiente sint. Facilis voluptate, et quaerat quod adipisci ipsum odio cum, rem exercitationem explicabo ratione possimus esse voluptates!</div>
            :
            null
        }
    </div>
  )
}

export default QnaCard