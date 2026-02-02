import VarietalItem from "@/components/VarietalItem";
import "@/styles/varietales.css";

const metadata = {
    title: "Varietales - Luz de los Andes",
    description: "Descubre los varietales exclusivos de Luz de los Andes, donde cada vino refleja la esencia única de Mendoza y la pasión por la vitivinicultura.",
}

export default function Varietales() {
    return (
        <main className="holder">
            <h2>Varietales</h2>

            <VarietalItem
                image="img/varietal_malbec.png"
                alt="Malbec"
                title="Malbec Reserva"
                text="Un vino intenso y equilibrado, nacido al pie de la montaña. De color profundo y aroma a frutos rojos maduros, su nombre evoca la fuerza de los Andes bañados por la primera luz del día."
            />

            <VarietalItem
                reverse
                image="img/varietal_blend.png"
                alt="Blend"
                title="Blend Premium"
                text="El emblema de la casa. Un vino complejo y profundo, elaborado en barricas seleccionadas. Cada sorbo revela capas de historia, pasión y arte; una verdadera conversación entre generaciones."
            />

            <VarietalItem
                image="img/varietal_chardonnay.png"
                alt="Chardonnay"
                title="Chardonnay Reserva"
                text="Refinado y luminoso, con notas a miel y duraznos blancos. Suave en boca y elegante, captura la magia de las mañanas mendocinas donde la niebla se disuelve sobre los viñedos."
            />

            <VarietalItem
                reverse
                image="img/varietal_cabernet.png"
                alt="Cabernet"
                title="Cabernet Sauvignon"
                text="De carácter firme y taninos redondos, este vino representa la quietud majestuosa del paisaje andino al atardecer. Ideal para acompañar carnes rojas o contemplar el ocaso."
            />

            <VarietalItem
                image="img/varietal_rose.png"
                alt="Rosé"
                title="Rosé de Malbec"
                text="Fresco y delicado, con tonos rosados suaves y perfume floral. Su nombre rinde homenaje a los amaneceres en Luján de Cuyo, donde la luz despierta cada racimo con suavidad y esperanza."
            />
        </main>
  );
}
