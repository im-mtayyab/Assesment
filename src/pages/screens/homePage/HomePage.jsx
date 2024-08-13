import Navbar from "../navbar/Navbar.jsx";
import Header from "../header/Header.jsx";
import CreditCardGuide from "../creditCardGuide/CreditCardGuide.jsx";
import CreditCardPicks from "../creditCardPicks/CreditCardPicks.jsx";
import CreditCardReview from "../creditCardReview/CreditCardReview.jsx";
import CreditCardArticles from "../creditCardArticles/CreditCardArticles.jsx";
import CreditCardFAQ from "../creditCardFAQs/CreditCardFAQ.jsx";
import Footer from "../footer/Footer.jsx";
import CreditCardCalculator from "../creditCardCalculator/CreditCardCalculator.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <CreditCardGuide />
      <CreditCardCalculator />
      <CreditCardPicks />
      <CreditCardReview />
      <CreditCardArticles />
      <CreditCardFAQ />
      <Footer />
    </>
  )
}

export default HomePage