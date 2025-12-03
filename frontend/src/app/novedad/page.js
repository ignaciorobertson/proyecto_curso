import NovedadItem from "@/components/NovedadItem"

export const metadata = {
    title: "Novedades - Luz de los Andes",
    description: "Mantente al día con las últimas novedades de Luz de los Andes. Descubre nuestros nuevos lanzamientos de vinos, eventos especiales y noticias del mundo vitivinícola en Mendoza.",
}

export default function Novedad() {
  return (
    <section className="holder">
        <h2>Novedades</h2>

        <NovedadItem title="Este es el titulo de la novedad1" subtitle="Subtitulo de la novedad"
        imagen="https://dummyimage.com/600x400/fff/aaa" body="Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Sapiente ut non fugiat iusto cum."/>

        <NovedadItem title="Este es el titulo de la novedad2" subtitle="Subtitulo de la novedad"
        imagen="https://dummyimage.com/600x400/fff/aaa" body="Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Sapiente ut non fugiat iusto cum."/>

        <NovedadItem title="Este es el titulo de la novedad3" subtitle="Subtitulo de la novedad"
        imagen="https://dummyimage.com/600x400/fff/aaa" body="Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Sapiente ut non fugiat iusto cum."/>

        <NovedadItem title="Este es el titulo de la novedad4" subtitle="Subtitulo de la novedad"
        imagen="https://dummyimage.com/600x400/fff/aaa" body="Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Sapiente ut non fugiat iusto cum."/>
    
    </section>

  )
};
