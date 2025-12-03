import Link from "next/link"
  
export default function Nav() {
    return (  
        <nav>
            <div className="holder">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/novedad">Novedades</Link></li>
                    <li><Link href="/nosotros">Nosotros</Link></li>
                    <li><Link href="/varietales">Varietales</Link></li>
                    <li><Link href="/turismo">Turismo</Link></li>
                    <li><Link href="/reservas">Reservas</Link></li>
                </ul>
            </div>
        </nav>
    )
}