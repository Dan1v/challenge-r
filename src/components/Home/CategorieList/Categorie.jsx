import Image from "next/image";

export default function Categorie(props) {
  return (
    <div>
      <div>
        <img
          src={props.image}
          alt={props.id}
          width={props.w}
          height={props.h}
        />
      </div>
      <div>
        <h2> {props.category} </h2>
      </div>
    </div>
  );
}
