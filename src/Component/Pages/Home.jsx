import heroImg from "../../assets/photo1.jpg"
import { ReactTyped } from "react-typed";
export default function Home({ full, barClicked }) {
    let homeStyle = full ? "section section-full home" : "section home";
    let barStyle = full ? "add-side" : "add-side  d-none";

    return (
        <>
        <section className={homeStyle}>
            <div className="main-box">
                <div className={barStyle} onClick={barClicked}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="main-content">
                    <h1 className="main-head">Hello, my name is <span className="clicker">Samir</span></h1>
                    <h1 className="main-head">I'm a <ReactTyped strings={["Web Designer","web Developer","Graphic Designer","YouTuber"]} typeSpeed={80} backSpeed={40} loop/></h1>
                    <p className="para">Recently I have compeled my bachelor degree and knowledge of various computer languages</p>
                    <button className="btn1">More About Me</button>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="img" />
                </div>
            </div>
        </section>
        </>
    )
}