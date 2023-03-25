import Image from "next/image";
import styles from "./SmarPhone.module.css";
export default function SmartPhone(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <img src={props.imagen} alt={props.id} />

          <div>{props.desc} OFF</div>
        </div>
        <div>
          <h1>{props.name}</h1>
          <p>
            ₹{props.newprice} <span> ₹{props.price} </span>
          </p>
          <p>Save - ₹{props.price - props.newprice} </p>
        </div>
      </div>
    </div>
  );
}
