import React from "react";
import Container from "../../components/Container";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Bags from "../Bags";
import Footer from "../Footer";

const Home: React.FC = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 shadow-md py-1 z-[9999] bg-white">
        <Container>
          <Navbar />
        </Container>
      </div>

      {/* Hero Banner */}
      <Container>
        <Banner />
      </Container>

      {/* Featured Products */}
      <Container>
        <Bags />
      </Container>

      {/* Footer */}
      <div className="bg-gray-900 mt-14">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
