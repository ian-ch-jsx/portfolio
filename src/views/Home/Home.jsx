import FadeIn from 'react-fade-in';
import { Zoom } from 'react-reveal';
import Illustration from '../../../public/assets/illustration.png';
import SelfCareBear from '../../../public/assets/SELFCAREBEAR.png';
import DBD from '../../../public/assets/DBD.png';
import GotchiBB from '../../../public/assets/GOTCHIBB.png';
import './Home.css';

export default function Home() {
  return (
    <FadeIn>
      <main>
        <section className="container">
          <section className="image">
            <img src={Illustration} className="illustration" />
          </section>
          <section>
            <section className="title">
              <h1>
                hi, i'm <strong>ian</strong>.
              </h1>
            </section>
            <section className="description">
              <p>I'm a software developer from reno, nv.</p>
            </section>
          </section>
        </section>
        <Zoom>
          <section className="container">
            <section className="image">
              <img src={SelfCareBear} className="preview" />
            </section>
            <section>
              <section className="example">
                <h1>
                  Self Care <strong>Bear</strong>.
                </h1>
              </section>
              <section className="description">
                <p>I'm a software developer from reno, nv.</p>
              </section>
            </section>
          </section>
        </Zoom>
        <Zoom>
          <section className="container">
            <section className="image">
              <img src={DBD} className="preview" />
            </section>
            <section>
              <section className="example">
                <h1>
                  DBD <strong>Stats</strong>.
                </h1>
              </section>
              <section className="description">
                <p>I'm a software developer from reno, nv.</p>
              </section>
            </section>
          </section>
        </Zoom>
        <Zoom>
          <section className="container">
            <section className="image">
              <img src={GotchiBB} className="preview" />
            </section>
            <section>
              <section className="example">
                <h1>
                  Gotchi <strong>BB</strong>.
                </h1>
              </section>
              <section className="description">
                <p>I'm a software developer from reno, nv.</p>
              </section>
            </section>
          </section>
        </Zoom>
      </main>
    </FadeIn>
  );
}
