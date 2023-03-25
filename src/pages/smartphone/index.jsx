import Layaout from "../../components/Layaout";

export default function index(data) {
  return (
    <div>
      <Layaout></Layaout>
    </div>
  );
}

export async function getServerSideProps() {
  const url = "http://127.0.0.1:1337/api/brands";
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
