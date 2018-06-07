import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotComponent } from './pot.component';
import { MatCardModule } from '@angular/material';

@NgModule( {
    imports : [
        CommonModule,
        MatCardModule,
    ],
    declarations : [
        PotComponent,
    ],
    exports : [
        PotComponent,
    ],
} )
export class PotModule { }
