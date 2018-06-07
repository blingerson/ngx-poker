
import { AppComponent } from './app.component';
import { BlindsModule } from './blinds/blinds.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CountdownTimerModule } from 'src/app/countdown-timer/countdown-timer.module';
import { PotModule } from 'src/app/pot/pot.module';
import { PlayerModule } from 'src/app/player/player.module';
import { ClockModule } from 'src/app/clock/clock.module';

@NgModule( {
    declarations : [
        AppComponent,
    ],
    imports : [
        BlindsModule,
        BrowserModule,
        ClockModule,
        CountdownTimerModule,
        MatToolbarModule,
        PlayerModule,
        PotModule,
    ],
    providers : [],
    bootstrap : [
        AppComponent,
    ],
} )
export class AppModule { }
