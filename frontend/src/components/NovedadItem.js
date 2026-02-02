// export default async function NovedadItem(props){

//     const { title, subtitle, imagen, body } = props;

//     return(
//         <div className="novedades">
//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//             {imagen ? <img src={imagen} alt={title} /> : null}
//             <div dangerouslySetInnerHTML={{ __html: body }} />
//             <hr/>
//         </div>
//     )
// }

"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/novedad.css";

export default function NovedadItem({
    title,
    subtitle,
    imagen,
    body,
    style
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

      if (ref.current) observer.observe(ref.current);
  }, []);

    return (
        <div
            ref={ref}
            style={style}
            className={`novedades ${visible ? "active" : ""}`}
        >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>

          {imagen && (
              <div className="novedad-img">
                  <img src={imagen} alt={title} />
        </div>
          )}

          <div
              className="novedad-body"
              dangerouslySetInnerHTML={{ __html: body }}
          />

          <hr />
      </div>
  );
}
