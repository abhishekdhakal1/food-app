import Link from "next/link";
import Image from "next/image";
import Logo from "@/assests/salad.jpg";
import classes from "./main-header.module.css"
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.abc} href="/">
            <Image src={Logo} alt="Logo Pic" className={classes.img} priority/> Next level Food
          </Link>
        </li>
        <li className={classes.ab}>
          <Link className={classes.ab} href="/meals">
            Meals
          </Link>
        </li>
        <li className={classes.ab}>
          <Link className={classes.ab} href="/community">
            Community
          </Link>
        </li>
      </ul>
    </header>
  );
}
