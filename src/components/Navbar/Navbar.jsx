import { TbTruckDelivery } from "react-icons/tb";
import { BiMap } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineSort } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import styles from "./NavbarStyle.module.css";

export default function Navbar() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.navbar}>
        <div className={styles.inicio}>
          <p>Welcome to World Wide Megamart!</p>
          <ul className={styles.nav1}>
            <li className={styles.nav_1}>
              <BiMap className={styles.icon1} />
              Deliver to 423651
            </li>
            <span className={styles.separador}> | </span>
            <li className={styles.nav_1}>
              <TbTruckDelivery className={styles.icon1} />
              Track your order
            </li>
            <span className={styles.separador}> | </span>
            <li className={styles.nav_1}>
              <TbDiscount2 className={styles.icon1} />
              All offers
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.buscador}>
        <div className={styles.bloque1}>
          <Link href={"/"}>
            <div className={styles.buscadorinfo}>
              <MdOutlineSort />
              <h1>MegaMart</h1>
            </div>
          </Link>
          <div className={styles.srch}>
            <div className={styles.srchcontent}>
              <BsSearch className={styles.icon1} />
              <input
                type="text"
                value="Search essentials, groceries and more..."
              />
            </div>
          </div>
          <div className={styles.sesion}>
            <li className={styles.nav_1}>
              <AiOutlineUser className={styles.icon1} />
              Sign Up/ Sign in
            </li>
            <span className={styles.separador}> | </span>
            <li className={styles.nav_1}>
              <AiOutlineShoppingCart className={styles.icon1} />
              Cart
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
