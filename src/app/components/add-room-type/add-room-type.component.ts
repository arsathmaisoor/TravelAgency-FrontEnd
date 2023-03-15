import { Component } from '@angular/core';
import { RoomType } from 'src/app/models/roomType';
import { RoomTypeService } from 'src/app/service/roomType.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent {
  constructor(private http: HttpClient, private roomTypeService: RoomTypeService){}

  // initialize properties with default values
  roomTypeId : number=1;
  roomTypeName : String="Deluxe";
  price: number=15000;
  noOfRooms: number=5;
  maxAdults: number = 3;

  // method to add new room type
  addRoomType(form: NgForm): void{
    // create room type object using properties values
    const roomType: RoomType = { roomTypeId: this.roomTypeId, roomTypeName: this.roomTypeName, price: this.price, noOfRooms: this.noOfRooms, maxAdults: this.maxAdults };
    console.log(roomType); 

    // call room type service to add new room type
    this.roomTypeService.addRoomType(roomType).subscribe(response => {
      console.log(response); 
      form.resetForm(); // reset the form after successful submission
    },
    error => {
      console.log(error); 
    });
  }
}
