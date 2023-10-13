import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SecondCompoComponent } from './second-compo/second-compo.component';
import { HeaderComponent } from './header/header.component';
import { ThirdCompoComponent } from './third-compo/third-compo.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ProductsComponent } from './component/products/products.component';
import { ObservableTestComponent } from './component/observable-test/observable-test.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { FomrTestComponent } from './component/fomr-test/fomr-test.component';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { CsvFileComponent } from './component/csv-file/csv-file.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    SecondCompoComponent,
    HeaderComponent,
    ThirdCompoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ObservableTestComponent,
    PipeComponent,
    FomrTestComponent,
    CsvFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
