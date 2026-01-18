import React from "react";
import HealthBolletin from "../HealthBolletin/HealthBolletin";
import Bolletin from "../Bolletin/Bolletin";
// import Marquee from "react-fast-marquee";

export default function Home() {
    return (
        <div>
            This is home
            <HealthBolletin></HealthBolletin>
            {/* <Marquee>
                <p>
                    I can be a React component, multiple React components, or
                    just some text.
                </p>
            </Marquee> */}
            {/* <Bolletin></Bolletin> */}
        </div>
    );
}
