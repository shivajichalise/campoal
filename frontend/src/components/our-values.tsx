import backgroundImg from "@/assets/images/our-values-background.png"

const OurValues = () => {
    return (
        <div
            className="flex h-fit items-center justify-center px-16 py-16 lg:py-32"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="flex flex-col items-center gap-16 pt-6 md:items-start lg:w-10/12 lg:justify-around lg:pt-28">
                <h1 className="text-primary text-center text-3xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                    Our Values
                </h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="my-2 flex flex-col items-start justify-between gap-5">
                        <h1 className="text-primary text-center text-2xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                            01
                        </h1>
                        <div>
                            <h4 className="text-primary scroll-m-20 text-2xl font-extrabold tracking-tight">
                                Make more value, not money.
                            </h4>
                            <p className="text-primary lg:w-10/12 [&:not(:first-child)]:mt-1">
                                We focus on creative and delivering value to
                                people across the world.
                            </p>
                        </div>
                    </div>
                    <div className="my-2 flex flex-col items-start justify-between gap-5">
                        <h1 className="text-primary text-center text-2xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                            02
                        </h1>
                        <div>
                            <h4 className="text-primary scroll-m-20 text-2xl font-extrabold tracking-tight">
                                Make it simple, not stressful.
                            </h4>
                            <p className="text-primary lg:w-10/12 [&:not(:first-child)]:mt-1">
                                We make everything simple, clearly and
                                accessible to everyone.
                            </p>
                        </div>
                    </div>
                    <div className="my-2 flex flex-col items-start justify-between gap-10">
                        <h1 className="text-primary text-center text-2xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                            03
                        </h1>
                        <div>
                            <h4 className="text-primary scroll-m-20 text-2xl font-extrabold tracking-tight">
                                Be human, not devil.
                            </h4>
                            <p className="text-primary lg:w-10/12 [&:not(:first-child)]:mt-1">
                                We do the right things with love and sincerity
                                to create sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues
