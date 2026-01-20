import About from "@/Pages/About/About";
import HealthBolletin from "../HealthBolletin/HealthBolletin";
import Services from "../Services/Services";

export default function Home() {
    return (
        <div>
            This is home
            <HealthBolletin />
            <div className="">
                <About />
                <Services />
            </div>
        </div>
    );
}
