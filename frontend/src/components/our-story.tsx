import img1 from "@/assets/our-story-1.png"
import img2 from "@/assets/our-story-2.png"
import img3 from "@/assets/our-story-3.png"
import img4 from "@/assets/our-story-4.png"

const OurStory = () => {
    return (
        <div className="flex items-center justify-center px-10 py-16">
            <div className="flex flex-col items-center justify-center gap-10 pt-6 xl:flex-row">
                <div className="flex flex-col items-center xl:w-2/5 xl:items-start">
                    <h1 className="text-text-200 mb-4 text-center text-3xl font-bold md:text-4xl lg:text-left lg:text-6xl">
                        Our Story
                    </h1>
                    <p className="text-text-100 text-justify text-sm md:text-lg xl:text-left [&:not(:first-child)]:my-2">
                        April 2016 when I was working part-time at a travel
                        agency. At that time, there was an environmental problem
                        in my country that made many people angry and they
                        created a petition on Change dot org and shared it on
                        Facebook. I am very interested in the idea of this
                        website, it is really helpful and it has a strong life
                        impact. I wonder why there is not such a website in my
                        country? I think every country should have such a
                        website and the world should have more than one in the
                        community. So I decided to quit my part-time job and
                        start developing a platform for social movements.
                    </p>
                    <p className="text-text-100 text-justify text-sm md:text-lg xl:text-left [&:not(:first-child)]:my-2">
                        Although I have some experience developing websites on
                        WordPress at my company, I still face many challenges to
                        develop and design. I work almost 12 hours a day, after
                        10 months the first version is released. I kept
                        improving it over the next 3 years with hundreds of
                        changes and new features added.
                    </p>
                    <p className="text-text-100 text-justify text-sm md:text-lg xl:text-left [&:not(:first-child)]:my-2">
                        Today, hundreds of websites powered by Campoal are
                        running around the world, millions of people are signing
                        to support for the problem they care about, starting
                        social movements and making changes to make their
                        country a better place. People have used websites to
                        change tax laws in France, raise funds to protect
                        animals in Germany, speak out about social problems in
                        Turkey, Calls for an end to war in Middle Eastern
                        countries Fundraising to help children in Africa and
                        more.
                    </p>
                    <p className="text-text-100 text-justify text-sm md:text-lg xl:text-left [&:not(:first-child)]:my-2">
                        By empowering entrepreneurs and organizations to give
                        people the opportunity to talk about their problems, I
                        believe that anyone can make the world a better place.
                    </p>

                    <p className="text-text-100 text-justify text-sm md:text-lg [&:not(:first-child)]:my-2">
                        Long Ha – Founder
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4 xl:mt-[-20px]">
                        <img src={img1} className="" />
                        <img src={img3} className="xl:mt-[-120px]" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 xl:mt-[100px]">
                        <img src={img2} />
                        <img src={img4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
