import "@/styles/home.css";
export default function Home() {
  return (
    <div className="">
      <main className="holder">
          <div>
              <img src="\img\toneles 2 sepia recorte separador.jpg" alt="toneles_sepia"></img>
              {/* <img src="img/toneles 2 sepia recorte separador.jpg" alt="toneles_sepia"> */}
          </div>
          <div className="columnas">
              <h2>Bienvenidos</h2>
              <p>
                  En el corazón de Luján de Cuyo, Mendoza, nace Luz de los Andes, una bodega donde la tradición vitivinícola se une con la sutileza de la luz andina. Cada vino refleja la esencia de nuestra tierra: el carácter noble de la montaña, la calma de los valles
                  y la pasión artesanal de quienes transforman la uva en arte. Bienvenidos a un lugar donde el tiempo se detiene para brindar por la elegancia, la historia y la autenticidad mendocina.
              </p>
          </div>
      </main>
    </div>
  );
}
