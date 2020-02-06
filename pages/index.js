import React from 'react';

import Printable from '../layouts/printable'
import Calendar from '../components/calendar'


const Home = () => {
   return (
    <Printable>
      <Calendar/>
    </Printable>
  );
};

/* Home.getInitialProps = ({req}) => {

} */

export default Home;
