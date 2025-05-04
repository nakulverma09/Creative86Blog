import React from "react";
import FrontPage from '../components/FrontPage';
import EmailForm from '../components/EmailForm';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
       <FrontPage />
      <div className="my-6 sm:my-12">
        <EmailForm />
      </div>
      <div className="my-6 sm:my-12">
        <Categories />
      </div>
      {/* <div className="my-6 sm:my-12">
        <RoomPodcasts />
      </div> */}
    </div>
  );
};

export default Home;
