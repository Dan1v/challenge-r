import Image from "next/image";

export default function Essentials(props) {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.id} />
      </div>
      <h3>{props.name}</h3>
      <h3>UP to {props.desc} % OFF</h3>
    </div>
  );
}
