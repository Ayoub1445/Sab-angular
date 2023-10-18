import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { SecondCompoComponent } from './second-compo/second-compo.component';
import { ThirdCompoComponent } from './third-compo/third-compo.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ProductsComponent } from './component/products/products.component';
import { ObservableTestComponent } from './component/observable-test/observable-test.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { FomrTestComponent } from './component/fomr-test/fomr-test.component';
import { CsvFileComponent } from './component/csv-file/csv-file.component';
import { SendComponent } from './component/behavior/send/send.component';
import { ReceiveComponent } from './component/behavior/receive/receive.component';

const routes: Routes = [
  { path: 'First', component: FirstCompoComponent },
  { path: 'Second', component: SecondCompoComponent },
  { path: 'Third', component: ThirdCompoComponent },
  { path: 'Parent', component: ParentComponent },
  { path: 'Child', component: ChildComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'observable', component: ObservableTestComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'FormTest', component: FomrTestComponent },
  { path: 'csv-file', component: CsvFileComponent },
  { path: 'behavior', component: SendComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: '**', component: FirstCompoComponent },
  // ce dernier permet de mettre le compo choisi comme page par defaut , si je met any thing cela me remet sur le compo choisi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
