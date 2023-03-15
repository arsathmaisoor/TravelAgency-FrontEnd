import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract } from 'src/app/models/contract';
import { RoomType } from 'src/app/models/roomType';
import { Hotel } from 'src/app/models/hotel';
import { RoomTypeService } from 'src/app/service/roomType.service';
import { ContractService } from 'src/app/service/contract.service';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent {
  [x: string]: any;
  
  constructor(private http: HttpClient, private contractService: ContractService, private roomTypeService: RoomTypeService){}

  contractId : number = 0;
  hotelId: number =1;
  hotelName: String="";
  fromDate : Date = new Date(2023, 2, 7);
  toDate : Date = new Date(2024, 2, 7);
  markUp : number = 15;
  roomTypes : RoomType[]=[];
  

  addContract(form: NgForm): void{   
    
    const contract: Contract = { contractId: this.contractId, hotelId: this.hotelId, hotelName: this.hotelName, fromDate: this.fromDate, toDate: this.toDate, markUp: this.markUp, roomTypes : this.roomTypes };
    console.log(contract); 
    this.contractService.addContract(contract).subscribe(response => {
      console.log(response); 
      form.resetForm(); 
    },
    error => {
      console.log(error); 
    });
    
    
  }

  addRoomType(form: NgForm): void{

   
    
    const roomType: RoomType = { roomTypeId: 0, roomTypeName: form.value.roomTypeName, price: form.value.price, noOfRooms: form.value.noOfRooms, maxAdults: form.value.maxAdults }
    this.roomTypeService.addRoomType(roomType).subscribe(response => {
      console.log(response); 
      form.resetForm(); 
    },
    error => {
      console.log(error); 
    });
    
    
  }


  
  addRoomType1(): void {
    const roomType: RoomType = { roomTypeId: 0, roomTypeName: '', price: 0, noOfRooms: 0, maxAdults: 0 };
    this.roomTypes.push(roomType);
  }

}
