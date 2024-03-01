import '../App.css'
import fashionIMG from '../assets/images/fashionIMG.png';

export default function Fashion() {
    return (
        <section>
            <div className="fashionDiv">
                <img className="fashionIMG" src={fashionIMG} alt="Fashion, Luxury, & Lifestyle Brands"/>
            </div>
        </section>
    )
}