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
        <div className="bg-tertiaryBackground flex flex-col items-center justify-center gap-16 px-16 py-16 text-white">
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
                            <li className="text-xs xl:text-sm">About</li>
                            <li className="text-xs xl:text-sm">Contact</li>
                            <li className="text-xs xl:text-sm">Careers</li>
                            <li className="text-xs xl:text-sm">Impact</li>
                            <li className="text-xs xl:text-sm">Testimonials</li>
                            <li className="text-xs xl:text-sm">Team members</li>
                        </ul>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-5 xl:items-start">
                        <h4 className="text-sm xl:text-lg">Resource</h4>
                        <ul className="flex flex-col items-center justify-center gap-2 xl:items-start">
                            <li className="text-xs xl:text-sm">Guide</li>
                            <li className="text-xs xl:text-sm">FAQs</li>
                            <li className="text-xs xl:text-sm">Press kets</li>
                            <li className="text-xs xl:text-sm">Compliance</li>
                            <li className="text-xs xl:text-sm">
                                Privacy Policy
                            </li>
                            <li className="text-xs xl:text-sm">
                                Terms of service
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-5 xl:items-start">
                        <h4 className="text-sm xl:text-lg">Community</h4>
                        <ul className="flex flex-col items-center justify-center gap-2 xl:items-start">
                            <li className="text-xs xl:text-sm">Shop</li>
                            <li className="text-xs xl:text-sm">Blog</li>
                            <li className="text-xs xl:text-sm">Forum</li>
                            <li className="text-xs xl:text-sm">Membership</li>
                            <li className="text-xs xl:text-sm">Help center</li>
                            <li className="text-xs xl:text-sm">Support desk</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 xl:hidden">
                    <div className="grid grid-cols-4 gap-5">
                        <img src={fb} />
                        <img src={twitter} />
                        <img src={youtube} />
                        <img src={medium} />
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
                    <img src={fb} />
                    <img src={twitter} />
                    <img src={youtube} />
                    <img src={medium} />
                </div>
            </div>
        </div>
    )
}

export default Footer
