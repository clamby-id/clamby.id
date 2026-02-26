import { Star } from 'lucide-react'

import Image from 'next/image'
interface MarqueeCardProps {
    review: string;
    name: string;
    occupation: string;
    image: string;
}

const MarqueeCard = ({ review, name, occupation, image }: MarqueeCardProps) => {
    return (
        <div className="container flex flex-col justify-between items-start border border-black/50 drop-shadow-xl drop-shadow-black/35 rounded-lg bg-accent-2 h-52 my-6 px-4 lg:px-6 py-6 max-w-100">
            <div className="flex flex-row gap-0.5 w-fit">
                <Star className="text-chart-2 h-5 w-5  fill-chart-2" />
                <Star className="text-chart-2 h-5 w-5  fill-chart-2" />
                <Star className="text-chart-2 h-5 w-5  fill-chart-2" />
                <Star className="text-chart-2 h-5 w-5  fill-chart-2" />
                <Star className="text-chart-2 h-5 w-5  fill-chart-2" />
            </div>
            <div className="text-black/50 text-xl italic font-archivo font-light text-left">{review}</div>
            <div className="flex flex-row gap-4 items-center font-archivo ">
                <Image src={image} alt="Profile Picture"
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12" />
                <div className="flex flex-col items-start">
                    <p className='font-bold'>{name}</p>
                    <p>{occupation}</p></div>
            </div>
        </div>
    )
}

export default MarqueeCard