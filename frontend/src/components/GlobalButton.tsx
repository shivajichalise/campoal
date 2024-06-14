import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    TCountryCode,
    countries,
    getCountryCode,
    getEmojiFlag,
} from "countries-list"
import { useState } from "react"

const GlobalButton = () => {
    const [selectedCountryName, setSelectedCountryName] = useState<string>("")
    const [selectedCountryCode, setSelectedCountryCode] = useState<
        TCountryCode | false
    >(false)

    const selectCountryHandler = (
        countryName: string,
        countryCode: false | TCountryCode
    ) => {
        setSelectedCountryName(countryName)
        setSelectedCountryCode(countryCode)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="focus-visible:ring-primary hidden rounded-2xl px-6 sm:flex"
                    variant="outline"
                >
                    {selectedCountryCode ? (
                        <span className="mr-2 flex items-center justify-center">
                            {getEmojiFlag(selectedCountryCode)}
                        </span>
                    ) : (
                        <Globe className="mr-2 h-4 w-4" />
                    )}
                    {selectedCountryCode ? selectedCountryCode : "Global"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-72 w-56 overflow-y-scroll">
                <DropdownMenuLabel>Countries</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {Object.entries(countries).map((country) => {
                        const countryName = country[1].name
                        const countryCode: false | TCountryCode =
                            getCountryCode(countryName)
                        return (
                            <DropdownMenuItem
                                onClick={() =>
                                    selectCountryHandler(
                                        countryName,
                                        countryCode
                                    )
                                }
                            >
                                {countryCode !== false && (
                                    <span className="mr-3">
                                        {getEmojiFlag(countryCode)}
                                    </span>
                                )}
                                <span>{countryName}</span>
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GlobalButton
