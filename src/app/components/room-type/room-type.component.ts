import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RoomType } from 'src/app/models/roomType';
import { RoomTypeService } from 'src/app/service/roomType.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent {
  public roomTypes: RoomType[]=[];
  constructor (private roomTypeService: RoomTypeService){}

  ngOnInit(): void {
    this.getRoomTypes();
  }
  public getRoomTypes(): void{
    this.roomTypeService.getRoomTypes().subscribe(
      (Response:RoomType[])=>{
        this.roomTypes = Response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public deleteRoomType(roomTypeId: number): void {
    // Subscribe to deleteRoomType() method from RoomTypeService
    this.roomTypeService.deleteRoomType(roomTypeId).subscribe(
      (response: any) => {
        console.log(response);
        // Refresh the roomTypes list after deleting the room type
        this.getRoomTypes();
      },
      (error: HttpErrorResponse) => {
        // Display an alert message if there is an error
        alert(error.message);
      }
    );
  }
}
