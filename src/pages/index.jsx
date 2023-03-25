import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Carrusel from "../components/Home/Carrusel/Carrusel";
import Layaout from "../components/Layaout";
import SmartPhone from "../components/Home/SmartphoneList/SmartPhone";
import Categorie from "../components/Home/CategorieList/Categorie";
import Brands from "../components/Home/BrandList/Brands";
import Essentials from "../components/Home/EssentialsList/Essentials";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, data2, data3, data4 }) {
  // console.log(data);
  const navigate = useRouter();
  return (
    <Layaout>
      <div className={styles.root}>
        <Carrusel />
        <h1>
          Grab the best deal on <span> Smartphones </span>
        </h1>
        <hr />
        <div className={styles.gridsmartphone}>
          {data.data.map((item) => (
            <div key={item.id}>
              <SmartPhone
                name={item.attributes.Modelo}
                imagen={`http://localhost:1337${item.attributes.Imagen.data[0].attributes.url}`}
                id={item.attributes.id}
                price={item.attributes.Precio}
                newprice={item.attributes.Precionuevo}
                desc={item.attributes.Descuento}
              />
              {console.log(
                "IMAGEN",
                item.attributes.Imagen.data[0].attributes.url
              )}
            </div>
          ))}
        </div>
        <h1>
          Shop From <span> Top Categories </span>
        </h1>
        <hr />
        <div className={styles.gridcategorie}>
          {data2.data.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate.push(`/categorie/${item.id}`);
              }}
            >
              <Categorie
                image={`http://localhost:1337${item.attributes.Image.data[0].attributes.url}`}
                w={100}
                h={100}
                category={item.attributes.Titulo}
              />
            </div>
          ))}
        </div>
        <h1>
          Top <span> Electronic Brands </span>
        </h1>
        <hr />
        <div className={styles.gridbrand}>
          {data3.data.map((item) => (
            <div key={item.id}>
              <Brands
                image={`http://localhost:1337${item.attributes.Marca.data[0].attributes.url}`}
                w={100}
                h={100}
              />
            </div>
          ))}
        </div>
        <h1>
          Daily <span> Essentials </span>
        </h1>
        <hr />
        <div className={styles.gridessential}>
          {data4.data.map((item) => (
            <div key={item.id}>
              <Essentials
                image={`http://localhost:1337${item.attributes.Imagen.data[0].attributes.url}`}
                name={item.attributes.Nombre}
                desc={item.attributes.Desc}
              />
            </div>
          ))}
        </div>
      </div>
    </Layaout>
  );
}
export async function getServerSideProps() {
  const url = "http://127.0.0.1:1337/api/smartphones?populate=*";
  const url2 = "http://127.0.0.1:1337/api/categories?populate=*";
  const url3 = "http://127.0.0.1:1337/api/brands?populate=*";
  const url4 = "http://127.0.0.1:1337/api/essentials?populate=*";

  const res = await fetch(url);
  const resp = await fetch(url2);
  const respo = await fetch(url3);
  const respon = await fetch(url4);

  const data = await res.json();
  const data2 = await resp.json();
  const data3 = await respo.json();
  const data4 = await respon.json();
  console.log(data3);

  return {
    props: {
      data,
      data2,
      data3,
      data4,
    },
  };
}
