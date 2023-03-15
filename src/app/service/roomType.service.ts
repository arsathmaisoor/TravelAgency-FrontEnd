import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../models/roomType';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoomTypeService{
    private apiServerUrl = environment.apiBaseUrl;
    
    constructor(private http:HttpClient) { }

    public getRoomTypes(): Observable<RoomType[]> {
        return this.http.get<RoomType[]>(`${this.apiServerUrl}/roomType/all`);
    }

    public addRoomType(roomType: RoomType): Observable<RoomType> {
        return this.http.post<RoomType>(`${this.apiServerUrl}/roomType/add`,roomType);
    }
    
    public updateRoomType(roomType: RoomType): Observable<RoomType> {
        return this.http.put<RoomType>(`${this.apiServerUrl}/roomType/update`,roomType);
    }

    public deleteRoomType(roomTypeId: number): Observable<any> {
        return this.http.delete(`${this.apiServerUrl}/roomType/delete/${roomTypeId}`);
      }

}
