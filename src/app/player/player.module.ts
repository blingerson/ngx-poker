import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
    exports : [
        PlayerComponent,
    ],
    imports : [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatExpansionModule,
        MatTooltipModule,
        ReactiveFormsModule,
    ],
    declarations : [
        PlayerComponent
    ],
} )
export class PlayerModule {}
