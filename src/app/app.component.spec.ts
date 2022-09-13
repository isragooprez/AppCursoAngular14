import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PersonasComponent} from "./personas/personas.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CURSO ANGULAR 14'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CURSO ANGULAR 14');
  });

  it(`should have as title 'Saludos ISRAGOO PREZ'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.saludos).toEqual('Saludos ISRAGOO PREZ');
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('CURSO ANGULAR 14 app is running!');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Saludos ISRAGOO PREZ');
  });

  it(`should render firma 'isragoo.prez KRACK'`,()=>{
    const  fixture = TestBed.createComponent(PersonasComponent);
    fixture.detectChanges();
    const compiled= fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mark')?.textContent).toContain('isragoo.prez KRACK')
  });

});
