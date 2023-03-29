
export interface Item {
    title: string,
    route: string
}

export interface ImgUrl {
    imgUrl:string    
}

export interface Img extends ImgUrl {
    id:number
}


///Test

export interface allProducts {
mainImg?: string,
description?: string,
name?: string,
price: number,
firsImg?: string,
secondImg?: string,
threeImg?: string,
category?: string,
gender?: string,
sale?:number,
isLike:boolean,
id: number,
newArrivals?:string,
sizeMain?: []
size?: [number, number, number, number, number, number, number, number, number]
}

