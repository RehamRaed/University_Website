import React from "react";
import Layout from "../../components/layouts/Layout";
import Hero from "./Hero";
import Program from './Program'
import About from "./About";
import Contact from "./Contact";
import Campus from "./Campus";
import Testimonials from "./Testimonials"
function Home(){
    return(
        <>
        <Layout >
           <Hero />
           <Program />
           <About />
           <Campus />
           <Testimonials />
           <Contact />
           </Layout>
           
            </>
    )
};
export default Home;
