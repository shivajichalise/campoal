import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PlatformUsers from "./components/platform-users"
import BelieveInVoice from "./components/believe-in-your-voice"
import OurValues from "./components/our-values"
import OurStory from "./components/our-story"
import hero1Image from "@/assets/hero.png"
import OurVision from "./components/our-vision"
import OurTeam from "./components/our-team"
import Contact from "./components/contact"

function App() {
    const hero1 = {
        heading: "World's Petition Platform",
        description: "World's Petition Platform",
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
        </>
    )
}

export default App
