import "@/styles/reservas.css";


export default function FormReserva() {
    return (
        <div>
            <h3>Completá el formulario y te contactaremos:</h3>
            <form action="/reserva" method="post" className="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label> <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="email">Email</label> <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label> <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label> <textarea name=""></textarea>
                </p>
                <p> <input type="submit" value="Enviar" /> </p>
            </form>
        </div>
    )
}
