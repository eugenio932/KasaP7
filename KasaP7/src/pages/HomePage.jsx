import React from 'react'
import "../styles/HomePage.scss"
import Banner from "../layout/Banner.jsx"
import ApartmentGrid from "../components/ApartmentGrid.jsx";
// import Footer from "../layout/Footer.jsx"


function HomePage() {
  return (
  <div>
      <Banner/>
      <ApartmentGrid/>
      {/* <Footer/> */}
  </div>
  );
}

export default HomePage;