import { TestBed } from '@angular/core/testing';
import { PersonasComponent } from './personas.component';

describe('PersonaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonasComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MUDULO PERSONAS'`, () => {
    const fixture = TestBed.createComponent(PersonasComponent);
    const app = fixture.componentInstance;
    expect(app.titulo).toEqual('MUDULO PERSONAS');
  });

  it(`should have as title 'LISTA DE PERSONAS'`, () => {
    const fixture = TestBed.createComponent(PersonasComponent);
    const app = fixture.componentInstance;
    expect(app.listaPersonasTitle).toEqual('LISTA DE PERSONAS');
  });
  it('should render titulo', () => {
    const fixture = TestBed.createComponent(PersonasComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('MUDULO PERSONAS');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PersonasComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('LISTA DE PERSONAS');
  });



});
