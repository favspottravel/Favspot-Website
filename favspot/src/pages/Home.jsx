import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/homepage/Hero";
import DestinationGrid from "../components/homepage/DestinationGrid";
import Welcome from "../components/homepage/Welcome";
import Activities from "../components/homepage/Activities";
import FAQs from "../components/homepage/FAQs";
import Testimonials from "../components/homepage/Testimonials";

function Home() {
  return (
    <Layout withNavbarOffset={false}>
      <Hero />
      <DestinationGrid />
      <Welcome />
      <Activities />
      <FAQs />
      <Testimonials />
    </Layout>
  );
}

export default Home;
