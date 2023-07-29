import { Icons } from "@/components/icons";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="mt-8 py-8 px-6">
      <div className="flex-auto">
        <div className="relative">
          <div className="mx-auto max-w-2xl md:max-w-5xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2 5 lg:max-w-none">
                  <div className="relative w-82 h-auto shrink-0 aspect-square">
                    <Image
                      src={"/portrait.webp"}
                      alt="portrait"
                      className="rotate-2 rounded-md"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="lg:order-first lg:mt-0 mt-4 lg:row-span-2 text-bold">
                <h1 className="text-2xl leading-7 font-bold lg:text-5xl">
                  I’m Manish Tamang. I live in New York City, where I design the
                  future.
                </h1>
                <div className="mt-8 text-sm leading-6 space-y-8 text-zinc-400">
                  <p>
                    I’ve loved making things for as long as I can remember, and
                    wrote my first program when I was 6 years old, just two
                    weeks after my mom brought home the brand new Macintosh LC
                    550 that I taught myself to type on.
                  </p>
                  <p>
                    The only thing I loved more than computers as a kid was
                    space. When I was 8, I climbed the 40-foot oak tree at the
                    back of our yard while wearing my older sister’s motorcycle
                    helmet, counted down from three, and jumped — hoping the
                    tree was tall enough that with just a bit of momentum I’d be
                    able to get to orbit.
                  </p>
                  <p>
                    I spent the next few summers indoors working on a rocket
                    design, while I recovered from the multiple surgeries it
                    took to fix my badly broken legs. It took nine iterations,
                    but when I was 15 I sent my dad’s Blackberry into orbit and
                    was able to transmit a photo back down to our family
                    computer from space.
                  </p>
                  <p>
                    Today, I’m the founder of Planetaria, where we’re working on
                    civilian space suits and manned shuttle kits you can
                    assemble at home so that the next generation of kids really
                    can make it to orbit — from the comfort of their own
                    backyards.
                  </p>
                </div>
              </div>
              <div className="lg:pl-24 lg:-mt-16 mt-12">
            <ul role="list" className="flex flex-col space-y-4">
                 <li className="flex text-sm  items-center group  space-x-2">
                  <Icons.twitter className="icon"/>
                  <Link href={'#'} className="dark:text-zinc-50 group-hover:text-teal-500" >
                  Follow on Twitter
                  </Link>
                 </li>
                 <li className="flex text-sm  items-center group  space-x-2">
                  <Icons.instagram className="icon" />
                  <Link href={'#'} className="dark:text-zinc-50 group-hover:text-teal-500" >
                  Follow on Instagram
                  </Link>
                 </li>
                 <li className="flex text-sm  items-center group  space-x-2">
                  <Icons.github className="icon"/>
                  <Link href={'#'} className="dark:text-zinc-50 group-hover:text-teal-500" >
                  Follow on Github
                  </Link>
                 </li>
                 <li className="flex text-sm  items-center group  space-x-2">
                  <Icons.linkedin className="icon" />
                  <Link href={'#'} className="dark:text-zinc-50 group-hover:text-teal-500" >
                  Follow on LinkedIn
                  </Link>
                 </li>
                 <li className="mt-8 mb-4 h-[0.5px] dark:bg-gray-400 bg-gray-500 w-full" />
                 <li className="flex text-sm  items-center group  space-x-2">
                    <Mail className={'group-hover:text-teal-500 text-gray-500'}/>
                    <Link href={'#'} className="dark:text-zinc-50 group-hover:text-teal-500">tamangmanish3456@gmail.com</Link>
                 </li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
