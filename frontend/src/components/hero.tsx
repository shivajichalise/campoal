import { H1 } from "./ui/h1"

interface HeroProps {
    heading: string
    description: string
    img: string
}

const Hero = ({ heading, description, img }: HeroProps) => {
    return (
        <div className="bg-secondaryBackground flex items-center justify-center">
            <div className="flex w-4/6 flex-col items-center justify-center pt-20 lg:pt-24">
                <H1 text={heading} />
                <p className="text-text-100 py-6 text-center">{description}</p>

                <img src={img} />
            </div>
        </div>
    )
}

export default Hero
