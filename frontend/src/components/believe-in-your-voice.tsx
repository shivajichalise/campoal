import voicesImg from "@/assets/voices.png"

const BelieveInVoice = () => {
    return (
        <div className="flex items-center justify-center px-12 py-16">
            <div className="flex flex-col items-center gap-10 lg:w-4/5 lg:justify-around">
                <h1 className="text-text-200 text-center text-2xl font-semibold md:text-4xl lg:text-left lg:text-5xl">
                    We believe in your voice
                </h1>

                <div className="flex flex-col gap-5 lg:flex-row">
                    <p className="text-text-100 text-left text-sm md:text-lg lg:text-xl">
                        We're in here with a simple and clear mission is
                        building a powerful platform for the change, helping
                        people around the world to raise their voices,
                        collecting signatures and contribute to the world.
                    </p>
                    <p className="text-text-100 text-left text-sm md:text-lg lg:text-xl">
                        At Conikal, We believe that the power to change the
                        world is in all human beings, we also believe that when
                        everyone speaks out the problem of society and action
                        together, the world will become a better place.
                    </p>
                </div>

                <img src={voicesImg} />
            </div>
        </div>
    )
}

export default BelieveInVoice
