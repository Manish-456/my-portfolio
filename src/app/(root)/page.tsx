import Articles from "@/components/articles/Articles";
import { Icons } from "@/components/icons";
import Gallery from "@/components/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="max-w-full md:max-w-7xl w-full mx-auto ">
        <div className="p-0 sm:p-8">
          <div className="flex flex-col space-y-8">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src={"/profile.jpg"}
                priority
                className="rounded-full object-contain"
                fill
                referrerPolicy="no-referrer"
                alt="Manish Tamang"
              />
            </div>
            <div className="lg:max-w-5xl  max-w-2xl">
              <div className="max-w-2xl space-y-4">
                <h1 className="font-bold text-2xl sm:max-w-5xl  tracking-tight  sm:text-5xl dark:text-zinc-50">
                  Software designer, founder, and amateur astronaut.
                </h1>
                <p className="dark:text-slate-400 text-slate-600 text-base leading-8">
                  I&apos;m Manish, a software designer and entrepreneur based in
                  New York City. I&apos;m the founder and CEO of Planetaria,
                  where we develop technologies that empower regular people to
                  explore space on their own terms.
                </p>

                <div className="space-x-4 flex items-center ">
                  <Icons.twitter  className="icon"/>
                  <Icons.instagram  className="icon"/>
                  <Icons.github  className="icon"/>
                  <Icons.linkedin  className="icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Articles />
      
    </main>
  );
}