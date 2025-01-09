import React from "react";
import Navbar from '../home/Navbar';
import LocalDate from '../home/LocalDate';
import CarInfo from '../home/components/car';
import Footer from "../home/components/footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <LocalDate />
            <CarInfo />
            <Footer />
        </div>
    );
};

export default Home;
