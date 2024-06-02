import headerImg from "../assets/images/restauranfood.jpg";
import Chicago from "./Chicago";
import Specials from "./Specials ";

export default function HomePage() {
  return (
    <>
      <section className="topHeaderSection">
       <Chicago />
        <div className="headerImgSection">
          <img src={headerImg} alt="headerImage" className="headerImage" />
        </div>
      </section>
      <section className="middle-container">
       <Specials />
      </section>
    </>
  );
}