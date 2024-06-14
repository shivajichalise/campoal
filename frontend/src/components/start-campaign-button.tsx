import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Edit } from "lucide-react"

const StartCampaignButton = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="hidden rounded-xl sm:flex">
                    <Edit className="mr-2 h-4 w-4" /> Start a campaign
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Start a Campaign</SheetTitle>
                    <SheetDescription>
                        Write your petition title. This is the first thing
                        people will see about your petition. Get their attention
                        with a short title that focuses on the change you’d like
                        them to support.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            value="Protect Fewa Lake: Stop Debris Flow and Prevent the Loss of Our Precious Waterbody"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Submit</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default StartCampaignButton
