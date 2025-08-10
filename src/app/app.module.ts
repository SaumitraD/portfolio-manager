import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PortfolioSummaryComponent } from './views/portfolio-summary/portfolio-summary.component';
import { BuySellPopupComponent } from './views/buy-sell-popup/buy-sell-popup.component';
import { OrderSummaryComponent } from './views/order-summary/order-summary.component';
import { OrderHistoryComponent } from './views/order-history/order-history.component';
import { AllocateFundsComponent } from './views/allocate-funds/allocate-funds.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioSummaryComponent,
    BuySellPopupComponent,
    OrderSummaryComponent,
    OrderHistoryComponent,
    AllocateFundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
