import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnOrdersComponent } from './Components/btn-orders/btn-orders.component';
import { BtnFoodComponent } from './Components/btn-food/btn-food.component';
import { BtnDrinksComponent } from './Components/btn-drinks/btn-drinks.component';
import { BtnCliDataComponent } from './Components/btn-cli-data/btn-cli-data.component';
import { BtnDessertsComponent } from './Components/btn-desserts/btn-desserts.component';
import { InfoOrderComponent } from './Components/info-order/info-order.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnOrdersComponent, BtnFoodComponent, BtnDrinksComponent, BtnCliDataComponent, BtnDessertsComponent, 
            InfoOrderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RestoServe';
}
