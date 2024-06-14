import backgroundImg from "@/assets/contact-background.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form"
import TContactFormValues, {
    contactSchema,
} from "@/schemas/contact-form-values"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const Contact = () => {
    const form = useForm<TContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            your_name: "",
            company_name: "",
            your_email: "",
            subject: "",
            message: "",
        },
    })

    const onSubmit = async (data: TContactFormValues) => {
        console.log("FORM DATA")
        console.table(data)
        toast.success("Message was sent.", { duration: 1500 })
    }

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
                    <Card className="w-[350px] shadow-xl md:w-7/12">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <CardContent className="mt-10">
                                    <div className="flex w-full flex-col items-center justify-center gap-5">
                                        <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                            <FormField
                                                control={form.control}
                                                name="your_name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-md lg:text-xl">
                                                            Your name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="your-name"
                                                                className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                            <FormField
                                                control={form.control}
                                                name="company_name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-md lg:text-xl">
                                                            Company name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="company_name"
                                                                className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                            <FormField
                                                control={form.control}
                                                name="your_email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-md lg:text-xl">
                                                            Your email
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="your_email"
                                                                className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex w-full flex-col space-y-1.5 lg:w-11/12">
                                            <FormField
                                                control={form.control}
                                                name="subject"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-md lg:text-xl">
                                                            Subject
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="subject"
                                                                className="focus-visible:ring-primary lg:h-12 lg:text-lg"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex h-full w-full flex-col space-y-1.5 lg:w-11/12">
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-md lg:text-xl">
                                                            Message
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                rows={10}
                                                                id="message"
                                                                className="focus-visible:ring-primary lg:text-lg"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full lg:w-11/12"
                                    >
                                        Send
                                    </Button>
                                </CardFooter>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact
