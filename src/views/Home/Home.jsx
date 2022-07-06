import Illustration from '../../../public/assets/illustration.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <span className="title">
        <h1>Hi, I'm Ian</h1>
      </span>
      <span className="illustration">
        <img src={Illustration} />
      </span>
    </div>
  );
}
