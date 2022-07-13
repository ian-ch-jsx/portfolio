import FadeIn from 'react-fade-in';
import { Fade } from 'react-reveal';
import Illustration from '../../../public/assets/illustration.png';
import SelfCareBear from '../../../public/assets/SELFCAREBEAR.png';
import DBD from '../../../public/assets/DBD.png';
import GotchiBB from '../../../public/assets/GOTCHIBB.png';
import GitHub from '../../../public/assets/github.png';
import LinkedIn from '../../../public/assets/linkedin.png';
import Resume from '../../../public/assets/resume.png';
import Nav from '../../../public/assets/chevron.png';
import './Home.css';

export default function Home() {
  return (
    <FadeIn delay="100">
      <main>
        <section className="container">
          <section className="title-image">
            <img src={Illustration} className="illustration" />
          </section>
          <section>
            <section className="title">
              <h1>
                hi, i'm <strong>ian</strong>.
              </h1>
            </section>
            <section className="description">
              <p>
                I'm a full stack software engineer currently located in Reno,
                NV. I create <b>intuitive</b> software with
                <b> user experience</b> in mind (because we could all stand to
                spend a little less time showing mom where to click).
              </p>
            </section>
            <section className="description">
              <p>
                When I'm not coding, you might find me <b>exploring nature </b>
                with my dog or playing <b>video games</b> and watching
                <b> horror films</b> with my cat.
              </p>
            </section>
            <section className="description">
              <p>
                I thrive in <b>collaborative</b> environments where unique
                perspectives can come together to <b>solve complex problems</b>.
                I strive to continue to participate in
                <b> socially responsible work </b>
                through advocacy, teaching, and learning.
              </p>
            </section>
            <section className="socials">
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
            <Fade>
              <section className="header">
                <h2>
                  recent <strong>projects</strong>.
                </h2>
              </section>
            </Fade>
          </section>
        </section>

        <Fade>
          <section className="container">
            <section>
              <section className="example">
                <h1>
                  Self Care <strong>Bear</strong>.
                </h1>
              </section>
              <section className="links">
                <a
                  href="https://github.com/self-care-bear/self-care-bear"
                  alt="github repo"
                >
                  [github]
                </a>

                <a
                  href="https://self-care-bears.netlify.app/"
                  alt="deployed site"
                >
                  [deploy]
                </a>
              </section>
              <section className="example-desc">
                <p>
                  <img src={SelfCareBear} className="preview" />A React app
                  utilizing Supabase, designed to help users create good habits
                  and maintain daily routines. Written on a 4-day sprint with a
                  team of 4, I implemented complex conditional rendering logic
                  and a polished UI.
                </p>
              </section>
            </section>
          </section>
        </Fade>
        <Fade>
          <section className="container">
            <section>
              <section className="example">
                <h1>
                  DBD <strong>Stats</strong>.
                </h1>
              </section>
              <section className="example-desc">
                <img src={DBD} className="preview" />
                <p>DBD stats manager is </p>
              </section>
            </section>
          </section>
        </Fade>
        <Fade>
          <section className="container">
            <section>
              <section className="example">
                <h1>
                  Gotchi <strong>BB</strong>.
                </h1>
              </section>
              <section className="links">
                <a href="https://github.com/Tamagotchi-Clone" alt="github repo">
                  [github]
                </a>

                <a href="https://gotchi-bb.netlify.app" alt="deployed site">
                  [deploy]
                </a>
              </section>
              <section className="example-desc">
                <p>
                  <img src={GotchiBB} className="preview" />A full-stack CRUD
                  app with a RESTful API that allows users to care for a virtual
                  pet. Written on a 10-day sprint with a team of 4, I took the
                  lead in project management, executed complex time-tracking
                  logic, and personally implemented a natural language
                  processing bot to allow users to chat with their pet.
                </p>
              </section>
            </section>
          </section>
        </Fade>
      </main>
    </FadeIn>
  );
}
