
import { ASSETS } from "@/lib/constants";
import Image from "next/image";
import { Card, CardContent, CardDescription } from "../ui/card";

const ClosetSection = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-linear-to-b from-background to-chart-2/25"
      id="features"
    >
      <div className="container flex flex-col gap-8 mx-auto px-4 md:px-20 lg:px-24 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center text-dark ">
          Your Digital Closet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="col-span-1 md:col-span-2 flex-col md:flex-row gap-4 justify-between">
            <CardDescription className="md:max-w-72 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-normal">Chaos, Curated</h2>
              <p className="text-lg md:text-xl text-black/50">
                Turn a messy pile of clothes into a perfectly organized digital
                inventory.
              </p>
            </CardDescription>
            <CardContent>
              <Image
                src={ASSETS.CLOSET[0]}
                alt="Messy Clothes"
                width={200}
                height={147}
                className="h-40 md:w-full rounded-2xl"
                priority
              />
            </CardContent>
          </Card>
          <Card className="col-span-1 gap-4 justify-between">
            <CardDescription className="md:max-w-72 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-normal">Placeholder</h2>
              <p className="text-lg md:text-xl text-black/50">
                Turn a messy pile of clothes into a perfectly organized digital
                inventory.
              </p>
            </CardDescription>
          </Card>
          <Card className="col-span-1 gap-4 justify-between">
            <CardDescription className="md:max-w-72 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-normal">Discover new styles</h2>
              <p className="text-lg md:text-xl text-black/50">
                Our AI Stylist helps you explore new genre of styles.
              </p>
            </CardDescription>
          </Card>
          <Card className="col-span-1 md:col-span-2 flex-col md:flex-row gap-4 justify-between">
            <CardDescription className="md:max-w-72 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-normal">No More Stress</h2>
              <p className="text-lg md:text-xl text-black/50">
                Don’t know what to wear? Let our AI stylist style you according to any occasion.
              </p>
            </CardDescription>
            <CardContent>
              <Image
                src={ASSETS.CLOSET[0]}
                alt="Messy Clothes"
                width={200}
                height={147}
                className="  md:w-full rounded-2xl"
                priority
              />
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 flex-col  md:flex-row gap-4  md:items-center justify-between">
            <CardDescription className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-normal">All-in-One Snap</h2>
              <p className="text-lg md:text-xl text-black/50">
                One mirror selfie is all it takes to digitize your wardrobe. Stop wasting time taking flat-lay photos of every single shirt you own. Just snap a picture of your daily outfit in the mirror, and our scanner handles the rest.
              </p>
            </CardDescription>
            <CardContent>
              <Image
                src={ASSETS.CLOSET[0]}
                alt="Messy Clothes"
                width={200}
                height={147}
                className="aspect-9/16 h-72 md:h-90  md:w-120 rounded-2xl"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClosetSection;
