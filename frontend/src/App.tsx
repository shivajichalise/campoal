import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PlatformUsers from "./components/platform-users"
import BelieveInVoice from "./components/believe-in-your-voice"
import OurValues from "./components/our-values"
import OurStory from "./components/our-story"
import hero1Image from "@/assets/hero.png"
import hero2Image from "@/assets/our-vision.png"

function App() {
    const hero1 = {
        heading: "World's Petition Platform",
        description: "World's Petition Platform",
        img: hero1Image,
    }

    const hero2 = {
        heading: "Our Vision",
        description:
            "Our vision is to be the best petition platform in the world.",
        img: hero2Image,
    }

    return (
        <>
            <Navbar />
            <Hero {...hero1} />
            <PlatformUsers />
            <BelieveInVoice />
            <OurValues />
            <OurStory />
            <Hero {...hero2} />
        </>
    )
}

export default App
