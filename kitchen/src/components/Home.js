import React from "react";
import { useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/Create');
  };
  return (
    <div className="Container">
        <div className="cont-1">
          <h1>Welcome to blogs</h1>
        </div>
        <div className="cont-2">
          <button className="homeButton" onClick={navigateToCreate} >Create Blogs</button>
        </div>
    </div>
  );
}

export default Home;
