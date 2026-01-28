import NovedadItem from "@/components/NovedadItem"

export const metadata = {
    title: "Novedades - Luz de los Andes",
    description: "Mantente al día con las últimas novedades de Luz de los Andes. Descubre nuestros nuevos lanzamientos de vinos, eventos especiales y noticias del mundo vitivinícola en Mendoza.",
}

export default async function Novedad() {
  try {
    const data = await fetch(`http://localhost:3000/api/novedades`, { cache: 'no-store' });
    // console.log("Fetch response:", data);
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const contentType = data.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }
    const novedades = await data.json();
    return (
      <section className="holder">
        <h2>Novedades</h2>
        {novedades.map(item => <NovedadItem
          key={item.id}
          title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
        }
      </section>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return (
      <section className="holder">
        <h2>Error</h2>
        <p>No se pudieron cargar las novedades. Verifica la conexión con el backend.</p>
      </section>
    );
  }
}