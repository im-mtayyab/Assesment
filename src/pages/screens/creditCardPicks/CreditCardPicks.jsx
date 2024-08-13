import './CreditCardPicks.css';
import BasicCard from "../../components/basicCard/BasicCard";

function CreditCardPicks() {
    const myContent = "Lorem ipsum dolor sit amet consectetur";
  return (
    <section className='credit-card-picks'>
        <h1>Top Picks for Credit Card</h1>
        <ul className="credit-card-pick-grid">
            <BasicCard content={myContent} category="category" cardWidth="" />
            <BasicCard content={myContent} category="category" cardWidth="" />
            <BasicCard content={myContent} category="category" cardWidth="" />
            <BasicCard content={myContent} icon="?" category="category" cardWidth="" />
            <BasicCard content={myContent} category="category" cardWidth="" />
            <BasicCard content={myContent} icon="?" category="category" cardWidth="" />
        </ul>
    </section>
  )
}

export default CreditCardPicks