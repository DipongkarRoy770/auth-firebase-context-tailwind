import React, { useContext }from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <h2>home components is ready</h2>
    </div>
  );
};

export default Home;