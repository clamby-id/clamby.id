

import { REVIEWS } from "@/lib/constants";


import MarqueeCard from "../ui/marqueecard";

interface MarqueeCardProps {
    review: string;
    name: string;
    occupation: string;
    image: string;
}

const reviews = REVIEWS;
const ReviewSection = () => {
    return (
        <section
            className="bg-background py-16 lg:py-24 "
            id="review"
        >
            <div className="container flex flex-col items-center gap-8 mx-auto px-4 md:px-20 lg:px-24 max-w-6xl">
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-medium text-center text-dark ">
                    What people say about <br /> Clamby
                </h2>
                <p className="text-2xl text-muted-foreground font-light">
                    Hear how Clamby is changing the way people get dressed.
                </p>
            </div>


            <div className="w-full mt-12 relative overflow-hidden">
                <div className="flex flex-row gap-8 pr-8 items-center w-max animate-marquee hover:paused">
                    {[...reviews, ...reviews, ...reviews].map((review: MarqueeCardProps, index) => (
                        <MarqueeCard key={index} review={review.review} name={review.name} occupation={review.occupation} image={review.image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
