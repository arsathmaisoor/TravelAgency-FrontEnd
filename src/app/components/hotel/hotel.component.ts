import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { NgForm } from '@angular/forms';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit{
  public hotels: Hotel[] = [];

  constructor(private hotelService: HotelService){}

  ngOnInit(): void {
    // Call the getHotels() function on initialization
    this.getHotels();
  }

  public getHotels(): void {
    // Call the getHotels() function of the HotelService to get a list of hotels
    this.hotelService.getHotels().subscribe(
      // On success, set the hotels array to the response
      (Response: Hotel[]) => {
        this.hotels = Response;
      },
      // On error, display the error message in an alert
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

 
}
