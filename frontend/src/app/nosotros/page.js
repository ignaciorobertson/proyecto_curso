"use client";
import { useEffect } from "react";
import "@/styles/nosotros.css";

export default function Nosotros() {
    useEffect(() => {
        const items = document.querySelectorAll(".reveal, .persona");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
        });
        },
        { threshold: 0.2 }
    );

      items.forEach(el => observer.observe(el));
  }, []);

    return (
    <main className="holder">
          {/* HISTORIA */}
          <div className="historia reveal">
              <h2>Historia</h2>
              <p>
                  Fundada en 1998 por la familia Ruiz del Valle, Luz de los Andes ha recorrido
                  un camino de dedicación y pasión por el vino. Desde sus inicios, la bodega
                  se ha comprometido a producir vinos que reflejen la riqueza del terroir
                  mendocino, combinando técnicas tradicionales con innovaciones modernas.
                  A lo largo de los años, hemos cultivado relaciones sólidas con viticultores
                  locales y hemos invertido en tecnología de punta para garantizar la calidad
                  en cada botella. Hoy, Luz de los Andes es reconocida tanto a nivel nacional
                  como internacional, siendo un símbolo de excelencia y autenticidad en el
                  mundo del vino.
              </p>
          </div>

          {/* STAFF */}
          <div className="staff">
              <h2>Nuestro equipo</h2>
              <div className="personas">
                  <div className="persona" style={{ "--i": 0 }}>
                      <img src="img/juan.jpg" alt="" />
                      <h5>Juan Ruiz del Valle</h5>
                      <h6>Gerente General</h6>
                      <p>Visionario y apasionado por la vitivinicultura...</p>
                  </div>

                  <div className="persona" style={{ "--i": 1 }}>
                      <img src="img/elena.jpg" alt="" />
                      <h5>Elena Arancibia</h5>
                      <h6>Enóloga Principal</h6>
                      <p>Con estudios en Mendoza y experiencia en viñedos europeos...</p>
                  </div>

                  <div className="persona" style={{ "--i": 2 }}>
                      <img src="img/martín.jpg" alt="" />
                      <h5>Martín Ruiz del Valle</h5>
                      <h6>Director de Producción</h6>
                      <p>Encargado de supervisar los viñedos y la elaboración...</p>
                  </div>

                  <div className="persona" style={{ "--i": 3 }}>
                      <img src="img/sofía.jpg" alt="" />
                      <h5>Sofía Ruiz del Valle</h5>
                      <h6>Directora de Marketing</h6>
                      <p>Responsable de la imagen y la hospitalidad de la bodega...</p>
                  </div>

                  <div className="persona" style={{ "--i": 4 }}>
                      <img src="img/ernesto.jpg" alt="" />
                      <h5>Ernesto Ruiz</h5>
                      <h6>Fundador Honorario</h6>
                      <p>Patriarca y fuente de inspiración...</p>
                  </div>
              </div>
          </div>
    </main>
  );
}
