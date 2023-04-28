
type host  = {
    name: string,
    picture: string,
}
export interface Article {
    id: string
    title: string
    cover: string
    pictures: string[]
    description: string
    host: host
    rating: number
    location: number
    equipments: string
    tags: string[]
}

