import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamiliaPage } from './familia.page';

describe('FamiliaPage', () => {
  let component: FamiliaPage;
  let fixture: ComponentFixture<FamiliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
