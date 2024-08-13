import FLEX from '../../../utils/styles/Flex';
import './Header.css';

function Header() {
  const isCentered = window.innerWidth < 1000
  return (
      <header style={{...FLEX.col}}>
        <div className="header-content" style={{...FLEX.col}}>
          <h1>Credit Card</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos explicabo laboriosam modi omnis vero esse error autem quod doloribus, distinctio beatae soluta deleniti ex provident ratione adipisci nisi aperiam.
          </p>
          <a href="#">What are you looking for?</a>
        </div>
      </header>
  )
}

export default Header