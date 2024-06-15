import Hero from "./hero"
import hero2Image from "@/assets/images/our-vision.svg"

const OurVision = () => {
    const hero2 = {
        heading: "Our Vision",
        description:
            "Our vision is to be the best petition platform in the world.",
        img: hero2Image,
    }

    return (
        <>
            <Hero {...hero2} />
            <div className="bg-primary grid grid-cols-1 items-center gap-5 px-24 py-10 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-left lg:text-6xl">
                        20,000
                    </h1>
                    <p className="text-justify text-sm font-light text-white md:text-lg xl:text-left">
                        Campaigns
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-left lg:text-6xl">
                        500,000
                    </h1>
                    <p className="text-justify text-sm font-light text-white md:text-lg xl:text-left">
                        Signatures
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-left lg:text-6xl">
                        10,000
                    </h1>
                    <p className="text-justify text-sm font-light text-white md:text-lg xl:text-left">
                        Donations
                    </p>
                </div>
            </div>
        </>
    )
}

export default OurVision
