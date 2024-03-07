
interface navItem {
    id: string,
    text: string,
    link: string
}

export const navData: navItem[]  = [
    {
        id: "1",
        text: "Home",
        link: "/"
    },
    {
        id: "2",
        text: "About us",
        link: "/about",
    },
    {
        id: "3",
        text: "What we do",
        link: "/what"
    },
    {
        id: "4",
        text: "Media",
        link: "/media"
    },
    {
        id: "5",
        text: "Contact",
        link: "/contact"
    }   
]