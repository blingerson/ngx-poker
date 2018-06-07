import { TestBed, async, tick, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from 'src/app/app.module';
import { interval } from 'rxjs';

describe( 'AppComponent', () => {
    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports : [
                AppModule,
            ],
        } ).compileComponents();
    } ) );
    it( 'should create the app', fakeAsync( () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        discardPeriodicTasks();
        expect( app ).toBeTruthy();
    } ) );
    it( `should have as title 'Project Houston'`, fakeAsync( () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        discardPeriodicTasks();
        expect( app.title ).toEqual( 'Project Houston' );
    } ) );
    it( 'should render title in a h1 tag', fakeAsync( () => {
        const fixture = TestBed.createComponent( AppComponent );
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        discardPeriodicTasks();
        expect( compiled.querySelector( 'h1' ).textContent ).toContain( 'Project Houston' );
    } ) );
} );
