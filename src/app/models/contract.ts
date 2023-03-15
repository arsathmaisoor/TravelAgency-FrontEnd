import { Hotel } from './hotel';
import { RoomType } from './roomType';


export interface Contract {
    contractId: number;
    hotelId: number;
    hotelName: String;
    fromDate: Date;
    toDate: Date;
    markUp: number;
    roomTypes: RoomType[]; 
}


