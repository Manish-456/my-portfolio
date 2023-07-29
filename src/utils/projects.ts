import { Icon } from "@/components/icons"

export const ProjectDone : Project[] = [
    {
        name : 'Planetaria',
        icon : 'planetaria',
        web : 'github.com',
        href : 'https://github.com',
        desc : "Creating technology to empower civilians to explore space on their own terms."
    },
    {
        name : 'Airbnb',
        icon : 'airbnb',
        web : 'github.com',
        href : 'https://github.com',
        desc : "It is a long established fact that a reader will be distracted by the readable content ."
    },
    {
        name : 'Facebook',
        icon : 'facebook_color_ful',
        web : 'github.com',
        href : 'https://github.com',
        desc : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  "
    },
    {
        name : 'Starbucks',
        icon : 'starbucks',
        web : 'github.com',
        href : 'https://github.com',
        desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered. "
    }
]

export type Project = {
    name : string,
    icon : Icon,
    web : string,
    href : string,
    desc : string

}