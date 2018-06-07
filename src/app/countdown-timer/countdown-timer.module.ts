import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule( {
    imports : [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
    ],
    declarations : [
        CountdownTimerComponent,
    ],
    exports : [
        CountdownTimerComponent,
    ],
} )

export class CountdownTimerModule {}
