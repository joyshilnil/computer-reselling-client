import React from 'react';
import AllCategory from './AllCategory';
import Banner from './Banner';
import CommingSoon from './CommingSoon';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategory></AllCategory>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Home;