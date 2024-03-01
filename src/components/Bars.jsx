import barsIMG from '../assets/images/barsIMG.png';

export default function Bar() {
    return (
        <section>
            <div className="barsDiv">
                <img className="barsIMG" src={barsIMG} alt="Bars & Restaurants"/>
            </div>
        </section>
    )
}