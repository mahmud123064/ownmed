import About from "@/Pages/About/About";
import HealthBolletin from "../HealthBolletin/HealthBolletin";

export default function Home() {
    return (
        <div>
            This is home
            <HealthBolletin />
            <About/>
        </div>
    );
}