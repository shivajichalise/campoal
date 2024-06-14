import logo from "@/assets/campoal-logo.svg"
import { Button } from "./ui/button"
import { Menu, Search, X } from "lucide-react"
import { DualButton } from "./dual-button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import GlobalButton from "./global-button"
import { useState } from "react"
import { Input } from "./ui/input"
import StartCampaignButton from "./start-campaign-button"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [userWantsToSearch, setUserWantsToSearch] = useState(false)

    const toggleSearch = () => {
        setUserWantsToSearch(!userWantsToSearch)
    }

    return (
        <>
            <nav
                className={`items-center justify-center bg-white p-3 ${userWantsToSearch ? "flex" : "hidden"}`}
            >
                <div className="flex w-full items-center space-x-2 md:w-3/4">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="focus-visible:ring-primary rounded-2xl"
                    />
                    <Button type="submit" size="icon" className="rounded-2xl">
                        <Search className="h-3 w-3 xl:h-4 xl:w-4" />
                    </Button>
                    <Button
                        type="submit"
                        size="icon"
                        variant="outline"
                        className="rounded-2xl"
                        onClick={toggleSearch}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </nav>
            <nav
                className={`items-center justify-between bg-white p-3 sm:justify-between ${userWantsToSearch ? "hidden" : "flex"}`}
            >
                <div className="flex w-full items-center justify-start gap-10">
                    <a href="/">
                        <img src={logo} className="w-40" />
                    </a>

                    <GlobalButton />
                </div>

                <div className="hidden items-center justify-end gap-4 sm:flex sm:w-2/3">
                    <NavigationMenu className="hidden xl:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                    onClick={toggleSearch}
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
                                    <a href="/campaign">Campaign</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                >
                                    <a href="/fundraiser">Fundraiser</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                >
                                    <a href="/membership">Membership</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                >
                                    <a href="/about">About</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                >
                                    <a href="/contact">Contact</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-black"
                                >
                                    <a href="/blog">Blog</a>
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <StartCampaignButton />

                    <DualButton
                        firstButtonVariant="secondary"
                        secondButtonVariant="default"
                        firstButtonText="Sign up"
                        secondButtonText="Sign in"
                        firstButtonHref="/signup"
                        secondButtonHref="/signin"
                        size="default"
                    />
                </div>
                <Button
                    size="sm"
                    variant="outline"
                    className="ml-3 xl:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
            </nav>
            <div
                className={`bg-primary absolute flex w-full flex-col items-center justify-center ${isMobileMenuOpen ? "block" : "hidden"} py-5 xl:hidden`}
            >
                <ul className="flex w-full flex-col items-end justify-center gap-5 pr-5 text-xl text-white">
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => {
                                setIsMobileMenuOpen(false)
                                toggleSearch()
                            }}
                        >
                            Search
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/campaign"
                        >
                            Campaign
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/fundraiser"
                        >
                            Fundraiser
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/membership"
                        >
                            Membership
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/about"
                        >
                            About
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/contact"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/blog"
                        >
                            Blog
                        </a>
                    </li>
                    <li className="block lg:hidden">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/signup"
                        >
                            Sign up
                        </a>
                    </li>
                    <li className="block lg:hidden">
                        <a
                            className="hover:bg-primary-content"
                            onClick={() => setIsMobileMenuOpen(false)}
                            href="/signin"
                        >
                            Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
