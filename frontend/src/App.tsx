import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PlatformUsers from "./components/platform-users"
import BelieveInVoice from "./components/believe-in-your-voice"
import OurValues from "./components/our-values"
import OurStory from "./components/our-story"
import hero1Image from "@/assets/images/hero.svg"
import OurVision from "./components/our-vision"
import OurTeam from "./components/our-team"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Toaster } from "sonner"

function App() {
    const hero1 = {
        heading: "World's Petition Platform",
        description:
            "We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world.",
        img: hero1Image,
    }

    return (
        <>
            <Navbar />
            <Hero {...hero1} />
            <PlatformUsers />
            <BelieveInVoice />
            <OurValues />
            <OurStory />
            <OurVision />
            <OurTeam />
            <Contact />
            <Footer />
            <Toaster richColors={true} position="top-right" />
        </>
    )
}

export default App
