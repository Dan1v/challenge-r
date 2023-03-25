import Layaout from "../../components/Layaout";
import Brandcomponentpage from "../../components/PageComponents/Brandcomponentpage";

export default function Entradabrand({ data }) {
  const { id, Marca } = data;
  return (
    <Layaout>
      <div>
        <Brandcomponentpage image={Marca} id={id} />
      </div>
    </Layaout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const url = `http://127.0.0.1:1337/api/brands/${id}`;
  const res = await fetch(url);
  const { data } = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
