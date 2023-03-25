import Categoriecomponentpage from "../../components/PageComponents/fawefeaw/Categoriecomponentpage";
import Layaout from "../../components/Layaout";

export default function Entradacategorie({ data }) {
  const {
    id,
    attributes: {
      Titulo,
      Image: { data: Images },
    },
  } = data;

  return (
    <Layaout>
      <div>
        <Categoriecomponentpage
          image={`http://localhost:1337${Images[0].attributes.url}`}
          id={id}
          name={Titulo}
        />
      </div>
    </Layaout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const url = `http://127.0.0.1:1337/api/categories/${id}?populate=*`;
  const res = await fetch(url);
  const { data } = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
