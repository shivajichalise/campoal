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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Edit } from "lucide-react"
import { toast } from "sonner"

const StartCampaignButton = () => {
    const startCampaign = () => {
        toast.success("Campaign is started.")
    }

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
                    <div className="flex items-center justify-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            value="Protect Fewa Lake: Stop Debris Flow and Prevent the Loss of Our Precious Waterbody"
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Label htmlFor="goal" className="text-right">
                            Goal
                        </Label>
                        <Input id="goal" value="5000" className="col-span-3" />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Label htmlFor="vategory" className="text-right">
                            Category
                        </Label>
                        <Select defaultValue="1">
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="1">
                                        Environmental Conservation
                                    </SelectItem>
                                    <SelectItem value="2">
                                        Social Justice
                                    </SelectItem>
                                    <SelectItem value="3">
                                        Healthcare
                                    </SelectItem>
                                    <SelectItem value="4">Education</SelectItem>
                                    <SelectItem value="5">
                                        Community Development
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={startCampaign}>
                            Submit
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default StartCampaignButton
