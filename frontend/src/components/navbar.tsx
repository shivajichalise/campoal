import logo from "@/assets/campoal-logo.svg"
import { Button } from "./ui/button"
import { Edit, Globe, Menu, Search } from "lucide-react"
import { DualButton } from "./dual-button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white p-3 sm:justify-between">
            <div className="flex w-full items-center justify-start gap-10">
                <img src={logo} className="w-40" />

                <Button
                    className="hidden rounded-2xl px-6 sm:flex"
                    variant="outline"
                >
                    <Globe className="mr-2 h-4 w-4" /> Global
                </Button>
            </div>

            <div className="hidden items-center justify-end gap-4 sm:flex sm:w-2/3">
                <NavigationMenu className="hidden xl:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                <Search className="mr-2 h-4 w-4" /> Search
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                Campaign
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                Fundraiser
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                Membership
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                About
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                Contact
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-black"
                            >
                                Blog
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Button className="hidden rounded-xl sm:flex">
                    <Edit className="mr-2 h-4 w-4" /> Start a campaign
                </Button>

                <DualButton
                    firstButtonVariant="secondary"
                    secondButtonVariant="default"
                    firstButtonText="Sign up"
                    secondButtonText="Sign in"
                    size="default"
                />
            </div>
            <Button
                size="sm"
                variant="outline"
                className="xs:hidden ml-3 xl:hidden"
            >
                <Menu className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
        </nav>
    )
}

export default Navbar
