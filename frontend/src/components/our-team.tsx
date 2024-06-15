import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import teamMember1 from "@/assets/images/team-member-1.svg"
import teamMember2 from "@/assets/images/team-member-2.svg"
import teamMember3 from "@/assets/images/team-member-3.svg"
import { Card, CardContent } from "./ui/card"

const OurTeam = () => {
    return (
        <div className="flex items-center justify-center px-16 py-16">
            <div className="flex w-10/12 flex-col items-center justify-evenly gap-6 xl:flex-row xl:gap-2">
                <div className="flex flex-col items-center justify-center gap-5 xl:w-2/6 xl:items-start">
                    <h1 className="text-text-200 text-center text-3xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                        Our team
                    </h1>
                    <p className="text-text-100 text-center text-sm xl:text-left xl:text-lg">
                        We need talented, passionate people to changing the
                        world
                    </p>
                    <Button className="mt-10 hidden xl:block" size="lg">
                        See all members
                    </Button>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center">
                        <Avatar className="h-64 w-56 rounded-none sm:h-56 sm:w-48 xl:h-64 xl:w-56">
                            <AvatarImage src={teamMember1} alt="CEO" />
                            <AvatarFallback>CEO</AvatarFallback>
                        </Avatar>
                        <Card className="z-10 mt-[-40px] w-48 rounded-2xl sm:w-40 xl:w-48">
                            <CardContent className="flex h-16 flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-between">
                                    <h3 className="text-text-200 mt-5 text-sm font-bold">
                                        Greg Rosenke
                                    </h3>
                                    <p className="text-text-200 text-center text-xs">
                                        Founder & CEO
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Avatar className="h-64 w-56 rounded-none sm:h-56 sm:w-48 xl:h-64 xl:w-56">
                            <AvatarImage src={teamMember2} alt="CEO" />
                            <AvatarFallback>CMO</AvatarFallback>
                        </Avatar>
                        <Card className="z-10 mt-[-40px] w-48 rounded-2xl sm:w-40 xl:w-48">
                            <CardContent className="flex h-16 flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-between">
                                    <h3 className="text-text-200 mt-5 text-sm font-bold md:text-xs">
                                        Jenny Uebergerg
                                    </h3>
                                    <p className="text-text-200 text-center text-xs">
                                        Chief Marketing Officer
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Avatar className="h-64 w-56 rounded-none sm:h-56 sm:w-48 xl:h-64 xl:w-56">
                            <AvatarImage src={teamMember3} alt="CEO" />
                            <AvatarFallback>CTO</AvatarFallback>
                        </Avatar>
                        <Card className="z-10 mt-[-40px] w-48 rounded-2xl sm:w-40 xl:w-48">
                            <CardContent className="flex h-16 flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-between">
                                    <h3 className="text-text-200 mt-5 text-sm font-bold">
                                        David Bole
                                    </h3>
                                    <p className="text-text-200 text-center text-xs">
                                        Chief Technology Officer
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Button className="block xl:hidden" size="lg">
                    See all members
                </Button>
            </div>
        </div>
    )
}

export default OurTeam
