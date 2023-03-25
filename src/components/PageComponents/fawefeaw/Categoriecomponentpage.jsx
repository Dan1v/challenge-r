import Image from "next/image";
import styles from "./Categoriecomponent.module.css";

export default function Categoriecomponentpage(props) {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.id} width={100} height={100} />
      </div>
      <h2 className={styles.prueba}>{props.name}</h2>
    </div>
  );
}
