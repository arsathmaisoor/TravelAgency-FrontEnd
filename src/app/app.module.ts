import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { ContractComponent } from './components/contract/contract.component';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { FormsModule } from '@angular/forms';
import { AddRoomTypeComponent } from './components/add-room-type/add-room-type.component';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'hotel', component:HotelComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomTypeComponent,
    ContractComponent,

    AddHotelComponent,
     AddRoomTypeComponent,
     AddContractComponent,
     SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
