import "../style/styles.css";
import fantasma from "../img/ghost-img.png"

function Main() {
    return (
        <>
            
            <main>
                <section className="sect-card">
                    <p>Error 404</p>
                    <h1>Hey Buddy</h1>
                    <p>We can't seem to find the page you are looking for.</p>
                    <button>Go Home</button>
                </section>
                <section className="sect-img">
                    <img
                    src={fantasma}
                    alt="" />
                    <div className="sombra"></div>
                </section>
            </main>

        </>
    )
}


export default Main;
