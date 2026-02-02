'use client'
import "@/styles/reservas.css";
import { useState } from "react";


export default function FormReserva({ postUrl }) {

    const initialForm = {
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinámica de asignar valores
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg("");
        setSending(true);

        const rawResponse = await fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const response = await rawResponse.json();
        setSending(false);
        setMsg(response.message);
        if (response.error === false) {
            setFormData(initialForm);
        }
    }




    return (
        <div>
            <h3>Completá el formulario y te contactaremos:</h3>
            <form action="/reserva" method="post" onSubmit={handleSubmit} className="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p> <input type="submit" value="Enviar" /> </p>
            </form>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
        </div>
    )
}
