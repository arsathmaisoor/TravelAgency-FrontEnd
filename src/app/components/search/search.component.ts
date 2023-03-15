import { Component } from '@angular/core';
import { Contract } from '../../models/contract';
import { ContractService } from '../../service/contract.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  numRooms: number;
  checkinDate: Date;
  checkoutDate: Date;
  numAdults: number;
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) {
    // Set default values for input fields
    this.numRooms = 1;
    this.checkinDate = new Date();
    this.checkoutDate = new Date();
    this.numAdults = 2;
  }

  searchContracts() {
    // Call the contract service to get all contracts
    this.contractService.getContracts()
      .subscribe(contracts => {
        // Loop through each contract to check if it matches search criteria
        for (let contract of contracts) {
          if (new Date(contract.fromDate) <= new Date(this.checkinDate) && 
              new Date(contract.toDate) >= new Date(this.checkoutDate)) {
            // Filter the room types that meet the search criteria
            let filteredRoomTypes = contract.roomTypes.filter(roomType => 
              roomType.maxAdults >= this.numAdults && roomType.noOfRooms >= this.numRooms);
            
            // Add the contract to the result if at least one roomType matches
            if (filteredRoomTypes.length > 0) {
              contract.roomTypes = filteredRoomTypes; // Update the contract's roomTypes
              this.contracts.push(contract);
            }
          }
        }
      });
  }
}
