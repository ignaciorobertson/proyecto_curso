import "@/styles/nosotros.css";

export const metadata = {
    title: "Nosotros - Luz de los Andes",
    description: "Conoce la historia y el equipo detrás de Luz de los Andes, una bodega familiar comprometida con la excelencia y la tradición vitivinícola en Mendoza.",
}

export default function Nosotros() {
  return (

    <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>
                Fundada en 1998 por la familia Ruiz del Valle, Luz de los Andes ha recorrido un camino de dedicación y pasión por el vino. Desde sus inicios, la bodega se ha comprometido a producir vinos que reflejen la riqueza del terroir mendocino, combinando técnicas
                tradicionales con innovaciones modernas. A lo largo de los años, hemos cultivado relaciones sólidas con viticultores locales y hemos invertido en tecnología de punta para garantizar la calidad en cada botella. Hoy, Luz de los Andes es
                reconocida tanto a nivel nacional como internacional, siendo un símbolo de excelencia y autenticidad en el mundo del vino.
            </p>
        </div>

        <div className="staff">
            <h2>Nuestro equipo</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/juan.jpg" alt="" />
                    <h5>Juan Ruiz del Valle</h5>
                    <h6>Gerente General</h6>
                    <p>Visionario y apasionado por la vitivinicultura, Juan representa la tercera generación de una familia dedicada al vino. Lidera la bodega con equilibrio entre tradición y modernidad, impulsando la innovación sin perder la esencia artesanal
                        que distingue a Luz de los Andes.</p>
                </div>
                <div className="persona">
                    <img src="img/elena.jpg" alt="" />
                    <h5>Elena Arancibia</h5>
                    <h6>Enóloga Principal</h6>
                    <p>Con estudios en Mendoza y experiencia en viñedos europeos, Elena es el alma detrás de cada cosecha. Su sensibilidad y rigor técnico logran vinos que expresan la pureza del terroir de Luján de Cuyo y la calidez de la familia que los
                        crea.
                    </p>
                </div>
                <div className="persona">
                    <img src="img/martín.jpg" alt="" />
                    <h5>Martín Ruiz del Valle</h5>
                    <h6>Director de Producción</h6>
                    <p>Encargado de supervisar los viñedos y la elaboración, Martín combina técnicas ancestrales con procesos sustentables. Su compromiso con la tierra se refleja en cada barrica, asegurando que el legado familiar continúe con respeto y excelencia.</p>
                </div>
                <div className="persona">
                    <img src="img/sofía.jpg" alt="" />
                    <h5>Sofía Ruiz del Valle</h5>
                    <h6>Directora de Marketing</h6>
                    <p>Responsable de la imagen y la hospitalidad de la bodega, Sofía traduce la esencia mendocina en experiencias únicas. Diseña cada detalle —desde las etiquetas hasta las degustaciones— con una estética cálida, elegante y contemporánea.</p>
                </div>
                <div className="persona">
                    <img src="img/ernesto.jpg" alt="" />
                    <h5>Ernesto Ruiz</h5>
                    <h6>Fundador Honorario</h6>
                    <p>Patriarca y fuente de inspiración, Don Ernesto plantó las primeras vides hace más de medio siglo. Su sabiduría y amor por la tierra aún guían a la familia, recordando que cada botella es también una historia de raíces, esfuerzo y luz
                        andina.
                    </p>
                </div>
            </div>
        </div>
    </main>
  );
}