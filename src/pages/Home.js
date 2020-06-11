import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Quartos luxuosos" subtitle="Quartos Deluxe a partir de R$1.299">
                    <Link to="/rooms" className='btn-primary'>
                        Nossos Quartos
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />

        </>    
    );
}

