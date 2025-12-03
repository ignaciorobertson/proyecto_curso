import Link from "next/link";

export const metadata = {
    title: "Turismo - Luz de los Andes",
    description: "Descubre las experiencias de turismo en Luz de los Andes. Participa en nuestros eventos Sunset y organiza tus eventos sociales y corporativos en un entorno único en Mendoza.",
}

export default function Turismo() {
  return (

    <main className="holder">
        <div>
            <img src="img/eventos 2 recorte separador.jpg" alt="toneles_sepia"></img>
        </div>
        <div className="columnas">
            <h2>Sunsets del Vino</h2>
            <p>
                Viví un atardecer inolvidable en Luz de los Andes, Una propuesta que combina vino, gastronomía, música y un entorno natural único.

            </p>
            <h4>Enterate de las próximas fechas en nuestro <a href="reservas.html">Instagram</a></h4>
        </div>
        <div>
            <img src="img/eventos 1 recorte separador.jpg" alt="toneles_sepia"></img>
        </div>
        <div className="columnas">
            <h2>Eventos Sociales y Corporativos</h2>
            <p>
                Disponemos de distintos espacios para realizar eventos corporativos y sociales. Ya sea la presentación de un producto, conferencias, reunión de equipo o incluso actividades para el Team Building de una empresa. También cenas privadas, cumpleaños o bodas.

            </p>
            <h4>
            Para más información y asesoramiento completá el{" "}
            <Link href="/reservas">FORMULARIO DE RESERVAS</Link>
            </h4>        
        </div>
    </main>
  );
}