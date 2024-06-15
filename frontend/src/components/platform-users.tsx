import { Card, CardContent } from "@/components/ui/card"

import activistsIcon from "@/assets/images/activists.svg"
import legislatorsIcon from "@/assets/images/legislators.svg"
import organizationsIcon from "@/assets/images/organizations.svg"
import reportersIcon from "@/assets/images/reporters.svg"

const PlatformUsers = () => {
    return (
        <div className="flex items-center justify-center px-16 py-16 lg:px-28">
            <div className="flex flex-col items-center gap-4 lg:w-11/12 lg:flex-row lg:justify-between">
                <div className="flex flex-col items-center gap-8 lg:w-2/5 lg:items-start">
                    <p className="text-text-100 md:text-lg lg:text-2xl">
                        Who use platform?
                    </p>
                    <h1 className="text-text-200 text-center text-xl font-extrabold lg:text-left lg:text-5xl">
                        We believe that when everyone speaks out the problem of
                        society and action together, the world will become a
                        better place.
                    </h1>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Card className="bg-primary h-72 w-64 rounded-2xl hover:mb-[5px] hover:mt-[-5px]">
                        <CardContent className="flex h-full flex-col items-center justify-around">
                            <div className="mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                                <img src={activistsIcon} />
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4">
                                <h3 className="text-xl font-bold text-white">
                                    Activists
                                </h3>
                                <p className="text-center text-xs text-white">
                                    Social activists can start a social
                                    movements and connect supporters in their
                                    communities.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary h-72 w-64 rounded-2xl hover:mb-[5px] hover:mt-[-5px]">
                        <CardContent className="flex h-full flex-col items-center justify-around">
                            <div className="mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                                <img src={legislatorsIcon} />
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4">
                                <h3 className="text-xl font-bold text-white">
                                    Legislators
                                </h3>
                                <p className="text-center text-xs text-white">
                                    Decision makers at the highest levels of
                                    government are engaging with their
                                    constituents.{" "}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary h-72 w-64 rounded-2xl hover:mb-[5px] hover:mt-[-5px]">
                        <CardContent className="flex h-full flex-col items-center justify-around">
                            <div className="mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                                <img src={organizationsIcon} />
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4">
                                <h3 className="text-xl font-bold text-white">
                                    Organizations
                                </h3>
                                <p className="text-center text-xs text-white">
                                    Leading organizations are advancing their
                                    causes and mobilizing new supporters.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary h-72 w-64 rounded-2xl hover:mb-[5px] hover:mt-[-5px]">
                        <CardContent className="flex h-full flex-col items-center justify-around">
                            <div className="mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                                <img src={reportersIcon} />
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4">
                                <h3 className="text-xl font-bold text-white">
                                    Reporters
                                </h3>
                                <p className="text-center text-xs text-white">
                                    Journalists are sourcing powerful stories
                                    and covering campaigns hundreds of times a
                                    day.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PlatformUsers
