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
    photoArary: string[],
    description: string
}
interface BookingItem {
    _id: string,
    user: string;
    hotel: HotelItem;
    startTime: Date;
    EndTime: Date;
    createAt: Date;
}

interface BookingJson {
    success: boolean,
    count: number,
    data: BookingItem[]
}