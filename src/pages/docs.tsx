import Sidebar from 'components/sidebar';
import { useState } from 'react';
import styles from 'styles/Docs.module.scss';

export default function Docs() {
  const [hidde, setHidde] = useState<boolean>(false);

  const handleHidde = () => setHidde(!hidde);

  return (
    <>
      <Sidebar handleHidde={handleHidde} hidde={hidde} />
      <div className={`${styles.docs} ${hidde ? styles.isHidde : ''}`}>
        <header className={styles.header}>
          <div>
            <a href='#teams'>
              The teams that you can use for your own e-commerce
            </a>
          </div>
          <div>
            <a href='#products'>The endpoints to use to get the products</a>
          </div>
        </header>
        <main className={styles.main}>
          <section id='products' className={styles.endpoints}>
            <h2>Endpoints to get all products</h2>
            <div>
              <p>Get all products</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/products</pre>
              </code>
              <p>Get single product</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/products/:id</pre>
              </code>
              <p>Get all products for one team</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/products/team/:team
                </pre>
              </code>
              <p>Params to get an order list of products:</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/products?sort=team&limit=5&order=asc
                </pre>
                <pre>
                  https://sp-api.alejandrosandi.com/api/products/team/:team?sort=sold&limit=5&order=asc
                </pre>
              </code>
            </div>
          </section>
          <section id='kits' className={styles.endpoints}>
            <h2>Endpoints to get kits</h2>
            <div>
              <p>Get all kits</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/kits</pre>
              </code>
              <p>Get single kit</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/kits/:id</pre>
              </code>
              <p>Get all kits for one team</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/kits/team/:team</pre>
              </code>
              <p>Params to get an order list of kits:</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/kits?sort=team&limit=5&order=asc
                </pre>
                <pre>
                  https://sp-api.alejandrosandi.com/api/kits/team/:team?sort=sold&limit=5&order=asc
                </pre>
              </code>
            </div>
          </section>
          <section id='training' className={styles.endpoints}>
            <h2>Endpoints to get training products</h2>
            <div>
              <p>Get all training products</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/training</pre>
              </code>
              <p>Get single training product</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/training/:id</pre>
              </code>
              <p>Get all training products for one team</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/training/team/:team
                </pre>
              </code>
              <p>Params to get an order list of training products:</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/training?sort=team&limit=5&order=asc
                </pre>
                <pre>
                  https://sp-api.alejandrosandi.com/api/training/team/:team?sort=sold&limit=5&order=asc
                </pre>
              </code>
            </div>
          </section>
          <section id='lifestyle' className={styles.endpoints}>
            <h2>Endpoints to get lifestyle products</h2>
            <div>
              <p>Get all lifestyle products</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/lifestyle</pre>
              </code>
              <p>Get single lifestyle product</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/lifestyle/:id</pre>
              </code>
              <p>Get all lifestyle products for one team</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/lifestyle/team/:team
                </pre>
              </code>
              <p>Params to get an order list of lifestyle products:</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/lifestyle?sort=team&limit=5&order=asc
                </pre>
                <pre>
                  https://sp-api.alejandrosandi.com/api/lifestyle/team/:team?sort=sold&limit=5&order=asc
                </pre>
              </code>
            </div>
          </section>
          <section id='accesories' className={styles.endpoints}>
            <h2>Endpoints to get accesories</h2>
            <div>
              <p>Get all kits</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/accesories</pre>
              </code>
              <p>Get single kit</p>
              <code>
                <pre>https://sp-api.alejandrosandi.com/api/accesories/:id</pre>
              </code>
              <p>Get all kits for one team</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/accesories/team/:team
                </pre>
              </code>
              <p>Params to get an order list of accesories:</p>
              <code>
                <pre>
                  https://sp-api.alejandrosandi.com/api/accesories?sort=team&limit=5&order=asc
                </pre>
                <pre>
                  https://sp-api.alejandrosandi.com/api/accesories/team/:team?sort=sold&limit=5&order=asc
                </pre>
              </code>
            </div>
          </section>
        </main>
        <section id='teams' className={styles.section}>
          <div className={styles.step}></div>
          <div className={styles.subtitle}>
            <h1>Teams that you can use their kits for your e-commerce</h1>
            <h2>
              The name next to the hyphen is the name for the endpoint path
            </h2>
          </div>
          <div className={styles.content}>
            <ul>
              <li>FC Barcelona - fc-barcelona</li>
              <li>Real Madrid - real-madrid</li>
              <li>Atletico de Madrid - atletico-madrid</li>
              <li>Liverpool FC - liverpool-fc</li>
              <li>Manchester United - manchester-united</li>
              <li>Manchester City - manchester-city</li>
              <li>Chelsea FC - chelsea-fc</li>
              <li>Arsenal FC - arsenal-fc</li>
            </ul>
            <ul>
              <li>Tottenham Hotspur - hottenham-hotspur</li>
              <li>AC Milan - ac-milan</li>
              <li>Juventus - juventus</li>
              <li>Inter Milan - inter-milan</li>
              <li>Bayern Múnich - bayern-munich</li>
              <li>Borussia Dortmund - borussia-dortmund</li>
              <li>Olympique Marseille - olympique-marseille</li>
              <li>París Saint-Germain - psg</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
