import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';

@NgModule( {
    exports : [ ClockComponent ],
    imports: [ CommonModule ],
    declarations: [ ClockComponent ],
} )
export class ClockModule {
}
