import "@/styles/varietales.css";


export const metadata = {
    title: "Varietales - Luz de los Andes",
    description: "Descubre los varietales exclusivos de Luz de los Andes, donde cada vino refleja la esencia única de Mendoza y la pasión por la vitivinicultura.",
}

export default function Varietales() {
    return (
        <main className="holder">
            <h2>Varietales</h2>
            <div className="varietales">
                <img src="img/varietal_malbec.png" alt="Malbec"></img>
                <div className="info">
                    <h4>Malbec Reserva</h4>
                    <p>Un vino intenso y equilibrado, nacido al pie de la montaña. De color profundo y aroma a frutos rojos maduros, su nombre evoca la fuerza de los Andes bañados por la primera luz del día.
                    </p>
                </div>
            </div>
            <div className="varietales">
                <img src="img/varietal_blend.png" alt="Blend"></img>
                <div className="info">
                    <h4>Blend Premium</h4>
                    <p>El emblema de la casa. Un vino complejo y profundo, elaborado en barricas seleccionadas. Cada sorbo revela capas de historia, pasión y arte; una verdadera conversación entre generaciones.
                    </p>
                </div>
            </div>
            <div className="varietales">
                <img src="img/varietal_chardonnay.png" alt="Chardonnay"></img>
                <div className="info">
                    <h4>Chardonnay Reserva</h4>
                    <p>Refinado y luminoso, con notas a miel y duraznos blancos. Suave en boca y elegante, captura la magia de las mañanas mendocinas donde la niebla se disuelve sobre los viñedos.
                    </p>
                </div>
            </div>
            <div className="varietales">
                <img src="img/varietal_cabernet.png" alt="Cabernet Sauvignon"></img>
                <div className="info">
                    <h4>Cabernet Sauvignon</h4>
                    <p>De carácter firme y taninos redondos, este vino representa la quietud majestuosa del paisaje andino al atardecer. Ideal para acompañar carnes rojas o contemplar el ocaso.
                    </p>
                </div>
            </div>
            <div className="varietales">
                <img src="img/varietal_rose.png" alt="Rosé de Malbec"></img>
                <div className="info">
                    <h4>Rosé de Malbec</h4>
                    <p>Fresco y delicado, con tonos rosados suaves y perfume floral. Su nombre rinde homenaje a los amaneceres en Luján de Cuyo, donde la luz despierta cada racimo con suavidad y esperanza.
                    </p>
                </div>
            </div>
        </main>
  );
}