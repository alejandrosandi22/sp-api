import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import styles from 'styles/Home.module.scss';
import { ProductType } from 'types/main';

export default function Home(props: { data: ProductType }) {
  const inputText = useRef<HTMLInputElement>(null);
  const [data, setData] = useState(props.data);

  const loader = ({ src, width, quality }: any) => {
    return `https://sp-api.alejandrosandi.com/${src}?w=${width}&q=${
      quality || 100
    }`;
  };

  console.log(new Date(Date.now()));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(inputText.current!.value);
    setData(await res.json());
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.principalContainer}>
          <h1>Get prove soccer products to create your own e-commerce</h1>
          <Link href='/docs'>
            <a>Get Started</a>
          </Link>
        </div>
        <div className={styles.heroContainer}>
          <div>
            <Image loader={loader} src='/hero.png' layout='fill' alt='hero' />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Products that you can use</h1>
          <p>
            Each product have their own images and sizes for kids, women and men
          </p>
        </div>
        <div className={styles.field}>
          <h2>Kits</h2>
          <p>
            Kits of the best teams of the five best leagues in Europe, to
            include in your own e-commerce
          </p>
        </div>
        <div className={styles.field}>
          <h2>Training</h2>
          <p>
            T-Shirts, jackets, tracksuits for each team. Training clothes to
            choose and add in your e-commerce.
          </p>
        </div>
        <div className={styles.field}>
          <h2>Lifestyle</h2>
          <p>
            Clothes for the best teams of Europe to use in an e-commerce like
            sweatshirts, jackets, t-shirts, polos and tracksuits.
          </p>
        </div>
        <div className={styles.field}>
          <h2>Accesories</h2>
          <p>
            Differents accesories that you can use in your e-commerce, socks,
            balls, gloves, backpacks, headwear and bottles.
          </p>
        </div>
      </main>
      <section className={styles.section}>
        <div className={styles.step}></div>
        <div className={styles.reqContainer}>
          <h1>Try Using The Endpoints</h1>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputText}
              type='text'
              defaultValue='https://sp-api.alejandrosandi.com/api/products/?sort=team&limit=1&order=asc'
            />
            <button>Send</button>
          </form>
          <p>
            See the endpoints in the{' '}
            <Link href='/docs'>
              <a>documentation</a>
            </Link>
            .
          </p>
          <div className={styles.req}>
            {data && <pre id='json'>{JSON.stringify(data, undefined, 4)}</pre>}
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res: Response = await fetch(
    'https://sp-api.alejandrosandi.com/api/products/?sort=team&limit=1&order=asc'
  );

  const data: Array<ProductType> = await res.json();

  return {
    props: { data },
  };
};
