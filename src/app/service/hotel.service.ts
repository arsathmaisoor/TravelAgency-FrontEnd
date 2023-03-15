import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class HotelService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http:HttpClient) { }

    public getHotels(): Observable<Hotel[]> {
        return this.http.get<Hotel[]>(`${this.apiServerUrl}/hotel/all`);
    }

    public addHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.post<Hotel>(`${this.apiServerUrl}/hotel/add`,hotel);
    }
    

    public updateHotel(hotel: Hotel): Observable<Hotel> {
        return this.http.put<Hotel>(`${this.apiServerUrl}/hotel/update`,hotel);
    }

    public deleteHotel(hotelId: number): Observable<any> {
        return this.http.delete(`${this.apiServerUrl}/hotel/delete/${hotelId}`);
      }
      
}