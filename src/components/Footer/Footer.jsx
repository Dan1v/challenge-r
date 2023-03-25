import styles from "./Footerstyle.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsApple } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { IconContext } from "react-icons";
export default function Footer() {
  return (
    <footer>
      <div className={styles.contenedor}>
        <div className={styles.footer}>
          <div className={styles.bloque1}>
            <h1>MegaMart</h1>
            <p className={styles.p1}>Contact us</p>
            <div className={styles.wpp}>
              <p>
                <FaWhatsapp />
                Whatsapp
                <br /> +1 202-918-2132
              </p>
            </div>
            <div className={styles.wpp}>
              <p>
                <FiPhoneCall />
                Whatsapp
                <br /> +1 202-918-2132
              </p>
            </div>
            <div className={styles.app}>
              <p className={styles.iconsapp}>
                Download App
                <br />
                <IconContext.Provider
                  value={{ className: "shared-class", size: 70 }}
                >
                  <BsApple />
                  <AiFillAndroid />
                </IconContext.Provider>
              </p>
            </div>
          </div>
          <div className={styles.bloque2}>
            <p>Most Popular Categories</p>
            <hr />
            <ul>
              <li>Stapies</li>
              <li>Beverages</li>
              <li>Personal care</li>
              <li>Home care</li>
              <li>Baby care</li>
              <li>Vegetables & fruits</li>
              <li>Snacks & foods</li>
              <li>Dairy & Baker</li>
            </ul>
          </div>
          <div className={styles.bloque3}>
            <p>Customer Services</p>
            <hr />
            <ul>
              <li>About us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.terms}>
        <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </footer>
  );
}
