import About from "@/Pages/About/About";
import HealthBolletin from "../HealthBolletin/HealthBolletin";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import MeetOurDrs from "../MeetOurDrs/MeetOurDrs";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
    return (
        <div>
            <Banner />
            <HealthBolletin />
            <div className="">
                <About />
                <Services />
                <MeetOurDrs />
                <Testimonials />
            </div>
        </div>
    );
}
