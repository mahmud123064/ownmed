import About from "@/Pages/About/About";
import HealthBolletin from "../HealthBolletin/HealthBolletin";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";

export default function Home() {
    return (
        <div>
            <Banner />
            <HealthBolletin />
            <div className="">
                <About />
                <Services />
            </div>
        </div>
    );
}
