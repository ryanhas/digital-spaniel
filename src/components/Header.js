import DigitalSpaniel from "../assets/Digital Spaniel logo01-01.png";
import Link from "./Link";

const Header = () => {
  return (
    <section className="header-page">
        <div className="header-left">
            <img alt="logo" src={DigitalSpaniel} id="brand-logo" className="logo" />
            <div className="header-left-text">
                <h3 className="header-land-title-red">Brand, Dev, Ecom, Marketing</h3>
                <h2 className="header-land-title">We unleash <span className="header-title-grey">business potential</span></h2>
                <p className="land-para">We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
                <Link>Let's talk</Link>
            </div>
        </div>
        <div className="header-right">
        </div>

    </section>
  );
};

export default Header;
