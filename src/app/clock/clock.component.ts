import { Component } from '@angular/core';

@Component( {
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: [ './clock.component.scss' ],
} )
export class ClockComponent {

    get time() {
        const time = new Date();
        return time.toLocaleString( 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true } );
    }

}
