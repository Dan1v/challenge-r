import Image from "next/image";

export default function Brands(props) {
  return (
    <div>
      <img src={props.image} alt={props.id} />
    </div>
  );
}
