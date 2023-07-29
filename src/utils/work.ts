import { Icon } from "@/components/icons"

export const works : Work[] = [
    {
        name : 'Planetaria',
        duration : '2019 — Present',
        icon : 'planetaria',
        post : 'CEO'
    },
    {
        name : 'Airbnb',
        duration : '2014 — 2019',
        icon : 'airbnb',
        post : 'Product Designer'
    },
    {
        name : 'Facebook',
        duration : '2011 — 2014',
        icon : 'facebook_color_ful',
        post : 'IOS Software Engineer'
    },
    {
        name : 'Starbucks',
        duration : '2008 — 2011',
        icon : 'starbucks',
        post : 'Shift Supervisor'
    }
]

export type Work = {
    name : string,
    icon : Icon,
    post : string,
    duration : string

}