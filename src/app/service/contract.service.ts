import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContractService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http:HttpClient) { }

    public getContracts(): Observable<Contract[]> {
        return this.http.get<Contract[]>(`${this.apiServerUrl}/contract/all`);
    }

    public addContract(contract: Contract): Observable<Contract> {
        return this.http.post<Contract>(`${this.apiServerUrl}/contract/add`,contract);
    }

    public updateContract(contract: Contract): Observable<Contract> {
        return this.http.put<Contract>(`${this.apiServerUrl}/contract/update`,contract);
    }

    public deleteContract(contractId: number): Observable<any> {
        return this.http.delete(`${this.apiServerUrl}/contract/delete/${contractId}`);
      }
}