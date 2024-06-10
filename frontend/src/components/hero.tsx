import image from "@/assets/hero.png"
import { H1 } from "./ui/h1"

const Hero = () => {
    return (
        <div className="bg-secondaryBackground flex w-full items-center justify-center">
            <div className="flex w-4/6 flex-col items-center justify-center pt-20 lg:pt-24">
                <H1 text="World's Petition Platform" />
                <p className="text-text-100 py-6 text-center">
                    We started in 2016 with the radical idea that anyone,
                    anywhere, should be able to easily and securely to start
                    their own petition. Today, we offer a trusted and
                    easy-to-use platform for social movement accross the world.
                </p>

                <img src={image} />
            </div>
        </div>
    )
}

export default Hero
