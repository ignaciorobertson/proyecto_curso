import "@/styles/reservas.css";

import FormReserva from "@/components/FormReservas";
export const metadata = {
    title: "Reservas - Luz de los Andes",
    description: "Reserva tu visita guiada y cata de vinos en Luz de los Andes. Disfruta de una experiencia única en nuestros viñedos en Luján de Cuyo, Mendoza.",
}

export default function Reservas() {
  return (

    <main className="holder contacto">
        <div className="imagenes_reservas">
            <img src="img/degustación 1.jpg" alt="degustacion" />
            <img src="img/visitanos_copas.jpg" alt="copas" />
            <img src="img/picada_rectang.jpg" alt="picada" />
        </div>

        <div>
            <h2>Visitas guiadas y cata de vinos</h2>
            <p>
                Descubrí los secretos...
            </p>

            <h3>Horarios:</h3>
            <ul>
                <li>Martes a Viernes: 10:00 - 16:00</li>
                <li>Sábados y Domingos: 11:00 - 17:00</li>
            </ul>

            <h2>Vení a vivír una experiencia única</h2>

              {/* VER SI ES ESTA: */}
              <FormReserva postUrl={`${process.env.API_BASE_URL}/api/reservas`} />
              {/* <FormReserva postUrl={`https://localhost:3000/api/reservas`} /> */}
        </div>
    </main>

  );
}