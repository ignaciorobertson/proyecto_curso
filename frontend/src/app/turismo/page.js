import TurismoBlock from "@/components/TurismoBlock";
import Link from "next/link";
import "@/styles/turismo.css";

export const metadata = {
    title: "Turismo - Luz de los Andes",
    description: "Descubre las experiencias de turismo en Luz de los Andes. Participa en nuestros eventos Sunset y organiza tus eventos sociales y corporativos en un entorno único en Mendoza.",
}

export default function Turismo() {
    return (
    <main className="holder">
            <TurismoBlock
                image="img/eventos 2 recorte separador.jpg"
                alt="Sunsets del Vino"
            >
                <h2>Sunsets del Vino</h2>
                <p>
                    Viví un atardecer inolvidable en Luz de los Andes. Una propuesta que
                    combina vino, gastronomía, música y un entorno natural único.
                </p>
                <h4>
                    Enterate de las próximas fechas en nuestro{" "}
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                </h4>
            </TurismoBlock>

            <TurismoBlock
                reverse
                image="img/eventos 1 recorte separador.jpg"
                alt="Eventos Sociales y Corporativos"
            >
                <h2>Eventos Sociales y Corporativos</h2>
                <p>
                    Espacios para eventos corporativos y sociales: presentaciones,
                    reuniones, team building, cenas privadas, cumpleaños o bodas.
                </p>
                <h4>
                    Para más información completá el{" "}
                    <Link href="/reservas">FORMULARIO DE RESERVAS</Link>
                </h4>
            </TurismoBlock>
    </main>
  );
}