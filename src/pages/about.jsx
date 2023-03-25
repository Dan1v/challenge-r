import Layaout from "../components/Layaout";
import Image from "next/image";
export default function about({ data }) {
  return (
    <Layaout title="About | Next.js">
      {console.log(data)}
      <div>
        <h1>about</h1>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} data={data}>
            <h1> {item.attributes.Modelo}</h1>
            <h1> {item.attributes.Precio}</h1>
          </div>
        ))}
      </div>
    </Layaout>
  );
}
export async function getServerSideProps() {
  const url = "http://127.0.0.1:1337/api/smartphones";
  const res = await fetch(url);
  const { data } = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
