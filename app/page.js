import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "./components/images/images-sildeshow";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow></ImageSlideshow>
        </div>
        <div className={styles.header}>
          <div className={styles.hero}>
            <h1>Next Level Foodies</h1>
            <p>Taste and share food from all around the world.</p>
            <div className={styles.cta}>
              <Link href="/community">Join the community</Link>
              <Link href="/meals">Explore Meals</Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
         <br></br>
        </section>
      </main>
    </>
  );
}
