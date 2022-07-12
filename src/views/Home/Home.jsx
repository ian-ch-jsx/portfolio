import FadeIn from 'react-fade-in';
import { Fade } from 'react-reveal';
import Illustration from '../../../public/assets/illustration.png';
import SelfCareBear from '../../../public/assets/SELFCAREBEAR.png';
import DBD from '../../../public/assets/DBD.png';
import GotchiBB from '../../../public/assets/GOTCHIBB.png';
import GitHub from '../../../public/assets/github.png';
import LinkedIn from '../../../public/assets/linkedin.png';
import Resume from '../../../public/assets/resume.png';
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
            <section className="description">
              <a
                href="https://github.com/ian-ch-jsx"
                target="_blank"
                alt="visit my github profile"
              >
                <img src={GitHub} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/ian-ch-jsx/"
                target="_blank"
                alt="visit my linkedin profile"
              >
                <img src={LinkedIn} alt="" />
              </a>
              <a
                href="https://drive.google.com/file/d/13jcWnkAZ_hgd4MBHE9c_7XAlmCF-PEnD/view?usp=sharing"
                target="_blank"
                alt="view my resume"
              >
                <img src={Resume} alt="" title="view my resume" />
              </a>
            </section>
          </section>
        </section>
        <Fade left>
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
              <section className="example-desc">
                <p>self care bear is</p>
              </section>
            </section>
          </section>
        </Fade>
        <Fade left>
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
              <section className="example-desc">
                <p>DBD stats manager is </p>
              </section>
            </section>
          </section>
        </Fade>
        <Fade left>
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
              <section className="example-desc">
                <p>gotchi bb is</p>
              </section>
            </section>
          </section>
        </Fade>
      </main>
    </FadeIn>
  );
}
