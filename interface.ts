interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
}

interface HotelItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    tel: string,
    price: number,
    capacityPerRoom: number,
    rating: number,
    photoArary: [string],
    description: string
}