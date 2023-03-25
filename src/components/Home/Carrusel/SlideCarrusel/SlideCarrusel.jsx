import Image from "next/image";
import styles from "./SlideCarrusel.module.css";
export default function SlideCarrusel(props) {
  return (
    <div className={props.color}>
      <div>
        <h2>{props.descripcion}</h2>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <div>
        <div></div>
        <Image
          src={props.imagenS}
          alt={""}
          width={props.ancho}
          height={props.alto}
        />
      </div>
    </div>
  );
}
