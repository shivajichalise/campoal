import backgroundImg from "@/assets/contact-background.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"

const Contact = () => {
    return (
        <div
            className="bg-primary flex items-center justify-center px-16 py-10 sm:bg-transparent"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "fit",
            }}
        >
            <div className="flex w-full flex-col items-center justify-center pt-6">
                <div className="mb-5 flex flex-col items-center gap-1 lg:gap-3">
                    <h1 className="text-center text-xl font-bold text-white md:text-2xl lg:text-left lg:text-5xl">
                        Feel free to contact us.
                    </h1>
                    <h1 className="text-center text-lg font-bold text-white md:text-2xl lg:text-left lg:text-5xl">
                        We’ll glad to hear from you.
                    </h1>
                </div>
                <div className="mt-10 flex w-full items-center justify-center">
                    <Card className="w-[350px] md:w-7/12">
                        <CardContent className="mt-10">
                            <form>
                                <div className="flex w-full flex-col items-center justify-center gap-5">
                                    <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                        <Label
                                            htmlFor="name"
                                            className="text-md lg:text-xl"
                                        >
                                            Your name
                                        </Label>
                                        <Input
                                            id="your-name"
                                            className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                        <Label
                                            htmlFor="company-name"
                                            className="text-md lg:text-xl"
                                        >
                                            Company name
                                        </Label>
                                        <Input
                                            id="company-name"
                                            className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                        <Label
                                            htmlFor="your-email"
                                            className="text-md lg:text-xl"
                                        >
                                            Your email
                                        </Label>
                                        <Input
                                            id="your-email"
                                            className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                        />
                                    </div>
                                    <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                        <Label
                                            htmlFor="subject"
                                            className="text-md lg:text-xl"
                                        >
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                        />
                                    </div>
                                    <div className="flex h-full w-full flex-col space-y-1.5 lg:w-11/12">
                                        <Label
                                            htmlFor="message"
                                            className="text-md lg:text-xl"
                                        >
                                            Message
                                        </Label>
                                        <Textarea
                                            rows={10}
                                            className="focus-visible:ring-primary lg:text-lg"
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button size="lg" className="w-full lg:w-11/12">
                                Send
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact
