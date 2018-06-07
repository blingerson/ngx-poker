import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlindsComponent } from './blinds.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule( {
    exports : [
        BlindsComponent,
    ],
    imports : [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
    ],
    declarations : [
        BlindsComponent,
    ]
} )
export class BlindsModule { }
