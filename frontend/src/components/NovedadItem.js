export default async function NovedadItem(props){

    const { title, subtitle, imagen, body } = props;

    return(
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {imagen ? <img src={imagen} alt={title} /> : null}
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr/>
        </div>
    )
}