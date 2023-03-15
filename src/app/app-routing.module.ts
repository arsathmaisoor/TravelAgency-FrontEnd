import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { ContractComponent } from './components/contract/contract.component';
import { AppComponent } from './app.component';
import { RoomTypeComponent } from './components/room-type/room-type.component';
import { AddContractComponent } from './components/add-contract/add-contract.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { AddRoomTypeComponent } from './components/add-room-type/add-room-type.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'hotel', component: HotelComponent},
  {path:'contract', component:ContractComponent},
  {path:'roomType', component:RoomTypeComponent},
  {path:'addContract', component:AddContractComponent},
  {path:'addHotel',component:AddHotelComponent},
  {path:'addRoomType',component: AddRoomTypeComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
