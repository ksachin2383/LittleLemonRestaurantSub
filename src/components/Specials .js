import GreekSalad from "../assets/images/greek salad.jpg";
import LemonSalad from "../assets/images/lemon dessert.jpg";
import Bruchetta from "../assets/images/bruchetta.svg";
import ScooterImg from "../assets/images/scooter.jpeg";

export default function Specials() {
    return (
        <>
        <div className="mainHeader">
        <h1 className="text-xl font-semibold">This weeks specials!</h1>
        <div className="mainHeaderButton">
          <button type="button" className="siteButton">
            Online Menu
          </button>
        </div>
      </div>
      <div className="mainDesc">
        <article className="card">
          <img src={GreekSalad} alt="Greek Salad" className="cardImage" />
          <div className="cardTitle">
            <h3>Greek Salad</h3> <h4>$12.99</h4>
          </div>
          <div className="cardDesc">
            <p>Lorem ipsum</p>
            <h5>Order a delivery <img src={ScooterImg} className="scooterImg" /></h5>
          </div>
        </article>
        <article className="card item2">
          <img src={LemonSalad} alt="Lemon Salad" className="cardImage" />
          <div className="cardTitle">
            <h3>Greek Salad</h3> <h4>$12.99</h4>
          </div>
          <div className="cardDesc">
            <p>Lorem ipsum</p>
            <h5>Order a delivery <img src={ScooterImg} className="scooterImg" /></h5>
          </div>
        </article>
        <article className="card item2">
          <img src={Bruchetta} alt="Bruchetta" className="cardImage" />
          <div className="cardTitle">
            <h3>Greek Salad</h3> <h4>$12.99</h4>
          </div>
          <div className="cardDesc">
            <p>Lorem ipsum</p>
            <h5>Order a delivery <img src={ScooterImg} className="scooterImg" /></h5>
          </div>
        </article>
      </div>
      </>
    )
}