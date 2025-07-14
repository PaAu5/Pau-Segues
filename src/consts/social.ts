import type { Social } from "@/types/social"

import X from "@/assets/x.svg"
import Instagram from "@/assets/instagram.svg"
import GitHub from "@/assets/github.svg"


export const SOCIAL: Social[] = [
    {
        id: "x",
        name: "X",
        url: "https://x.com/pau_segues",
        image: {
            logo: X,
            width: 200,
            height: 200,
        },
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/pau_segues/",
        image: {
            logo: Instagram,
            width: 200,
            height: 200,
        },
    },
        {
        id: "github",
        name: "GitHub",
        url: "https://github.com/PaAu5",
        image: {
            logo: GitHub,
            width: 200,
            height: 200,
        },
    },
]