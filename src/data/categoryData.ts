const technologyImg = require("../assets/technology1.jpg")
const sportsImg = require("../assets/sports.jpg")
const astronomyImg = require("../assets/astronomy.jpg")

export interface CategoryInterface {
    title: string,
    img: string
}

export const categoryData : CategoryInterface[]  = [
    {
        title: "Technology",
        img: technologyImg
    }, {
        title: "Sports",
        img: sportsImg
    }, {
        title: "Astronomy",
        img: astronomyImg
    },
]


