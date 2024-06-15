import img1 from "@/assets/footer-img-1.png"
import img2 from "@/assets/footer-img-2.png"
import img3 from "@/assets/footer-img-3.png"
import img4 from "@/assets/footer-img-4.png"
import fb from "@/assets/fb.png"
import twitter from "@/assets/twitter.png"
import youtube from "@/assets/youtube.png"
import medium from "@/assets/medium.png"

const Footer = () => {
    return (
        <div className="bg-tertiaryBackground flex flex-col items-center justify-center gap-16 px-10 py-16 text-white">
            <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
                <div className="flex flex-col items-center justify-between gap-5 xl:w-2/5 xl:items-start">
                    <h1 className="text-center text-sm font-bold xl:text-lg">
                        What is campoal?
                    </h1>
                    <p className="text-center text-xs md:w-4/5 xl:text-start xl:text-sm">
                        Campoal is a completed WordPress theme used to create
                        Petition Platform, Foundation and Non-profit website
                        where anyone can be start a social movement, collect
                        supporters and fundraising to change something in
                        society.
                    </p>
                    <div className="grid grid-cols-4 justify-center gap-5">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-20">
                    <div className="mt-3 flex flex-col items-center gap-5 xl:items-start">
                        <h4 className="text-lg xl:text-lg">Company</h4>
                        <ul className="flex flex-col items-center justify-center gap-2 xl:items-start">
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#about"
                                    className="hover:text-secondary"
                                >
                                    About
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#contact"
                                    className="hover:text-secondary"
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#careers"
                                    className="hover:text-secondary"
                                >
                                    Careers
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#impact"
                                    className="hover:text-secondary"
                                >
                                    Impact
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#testimonials"
                                    className="hover:text-secondary"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#team-members"
                                    className="hover:text-secondary"
                                >
                                    Team members
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-5 xl:items-start">
                        <h4 className="text-sm xl:text-lg">Resource</h4>
                        <ul className="flex flex-col items-center justify-center gap-2 xl:items-start">
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#guide"
                                    className="hover:text-secondary"
                                >
                                    Guide
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#faqs"
                                    className="hover:text-secondary"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#press-kets"
                                    className="hover:text-secondary"
                                >
                                    Press kets
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#compliance"
                                    className="hover:text-secondary"
                                >
                                    Compliance
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#privacy-policy"
                                    className="hover:text-secondary"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#terms-of-service"
                                    className="hover:text-secondary"
                                >
                                    Terms of service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-5 xl:items-start">
                        <h4 className="text-sm xl:text-lg">Community</h4>
                        <ul className="flex flex-col items-center justify-center gap-2 xl:items-start">
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#shop"
                                    className="hover:text-secondary"
                                >
                                    Shop
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#blog"
                                    className="hover:text-secondary"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#forum"
                                    className="hover:text-secondary"
                                >
                                    Forum
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#membership"
                                    className="hover:text-secondary"
                                >
                                    Membership
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#help-center"
                                    className="hover:text-secondary"
                                >
                                    Help center
                                </a>
                            </li>
                            <li className="text-xs xl:text-sm">
                                <a
                                    href="#support-desk"
                                    className="hover:text-secondary"
                                >
                                    Support desk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 xl:hidden">
                    <div className="grid grid-cols-4 gap-5">
                        <a
                            className="cursor-pointer"
                            href="https://facebook.com"
                            target="_blank"
                        >
                            <img src={fb} />
                        </a>
                        <a
                            className="cursor-pointer"
                            href="https://x.com"
                            target="_blank"
                        >
                            <img src={twitter} />
                        </a>
                        <a
                            className="cursor-pointer"
                            href="https://youtube.com"
                            target="_blank"
                        >
                            <img src={youtube} />
                        </a>
                        <a
                            className="cursor-pointer"
                            href="https://medium.com"
                            target="_blank"
                        >
                            <img src={medium} />
                        </a>
                    </div>
                    <p className="text-center text-xs">
                        &copy; Campoal. Powered by Conikal LLC
                    </p>
                </div>
            </div>
            <div className="hidden w-4/5 items-end justify-between xl:flex">
                <p className="text-center text-xs">
                    &copy; Campoal. Powered by Conikal LLC
                </p>
                <div className="grid grid-cols-4 gap-5">
                    <a
                        className="cursor-pointer"
                        href="https://facebook.com"
                        target="_blank"
                    >
                        <img src={fb} />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://x.com"
                        target="_blank"
                    >
                        <img src={twitter} />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://youtube.com"
                        target="_blank"
                    >
                        <img src={youtube} />
                    </a>
                    <a
                        className="cursor-pointer"
                        href="https://medium.com"
                        target="_blank"
                    >
                        <img src={medium} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
