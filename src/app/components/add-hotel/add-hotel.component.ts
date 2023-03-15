import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {
  // Properties to hold the hotel ID and name
  hotelId : number = 0;
  hotelName : string = "";

  // Constructor that injects the HTTP client and hotel service dependencies
  constructor(private http: HttpClient, private hotelService: HotelService){}

  // Method that adds a new hotel to the database
  addHotel(form: NgForm): void {
    // Create a new hotel object with the ID and name properties
    const hotel: Hotel = { hotelId: this.hotelId, hotelName: this.hotelName };
    console.log(hotel); // Log the hotel object to the console for debugging purposes

    // Call the addHotel method from the hotel service, passing in the new hotel object
    // and subscribe to the response from the server
    this.hotelService.addHotel(hotel).subscribe(
      response => {
        console.log(response); // Log the response from the server to the console
        form.resetForm(); // Reset the form after adding the hotel
      },
      error => {
        console.log(error); // Log any errors to the console
      }
    );  
  }  
}
