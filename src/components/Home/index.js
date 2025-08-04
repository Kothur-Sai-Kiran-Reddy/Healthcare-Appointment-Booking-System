import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import './index.css'

const Home = () => {
  return (
    <div className = "navbar-home-container">
      <Navbar />
      <div className="home-container">
        <h1 className='home-heading'>Your Trust is Our <br /> Greatest Incentive!</h1>
        <p>Let's make Health Care Better Together</p>
        <Link to = "/doctors" style = {{textDecoration : 'none', color : 'black'}}>
          <button type="button">Find Doctors</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
