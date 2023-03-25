import Image from "next/image";
export default function Brandcomponentpage(props) {
  return (
    <div>
      <div>
        <Image src={props.image} alt={props.id} width={100} height={100} />
      </div>
    </div>
  );
}
