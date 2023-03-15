import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  // Define contracts array of type Contract
  public contracts: Contract[] = [];

  // Inject ContractService
  constructor(private contractService: ContractService) { }

  // Call getContracts() function when the component is initialized
  ngOnInit(): void {
    this.getContracts();
  }

  // Call getContracts() function from the service
  public getContracts(): void {
    this.contractService.getContracts().subscribe(
      (response: Contract[]) => {
        // Assign response to the contracts array
        this.contracts = response;
      },
      (error: HttpErrorResponse) => {
        // Show error message if an error occurs
        alert(error.message);
      }
    );
  }

  // // Call deleteContract() function from the service to delete a contract
  // public deleteContract(contractId: number): void {
  //   this.contractService.deleteContract(contractId).subscribe(
  //     (response: any) => {
  //       // Log response to console
  //       console.log(response);
  //       // Refresh the contract list after deleting the contract
  //       this.getContracts();
  //     },
  //     (error: HttpErrorResponse) => {
  //       // Show error message if an error occurs
  //       alert(error.message);
  //     }
  //   );
  // }
}
