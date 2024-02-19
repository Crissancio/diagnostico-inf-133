import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./components/pokedex";

export default function Home() {
  return (
    <div className={styles.main}>
      <Pokedex 
        id={25} />
      <Pokedex 
        id={30} />
      <Pokedex 
        id={15} />
      <Pokedex 
        id={50} />
      <Pokedex 
        id={45} />
      <Pokedex 
        id={55} />
    </div>
  );
}
