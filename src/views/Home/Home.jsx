import Illustration from '../../../public/assets/illustration.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <span className="title">
        <span className="typewriter">
          <h1>
            hi, i'm <strong>ian</strong>.
          </h1>
        </span>
      </span>
      <span className="illustration">
        <img src={Illustration} />
      </span>
    </div>
  );
}
