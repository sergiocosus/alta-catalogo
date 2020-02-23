import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BullPage } from './bull.page';

describe('BullPage', () => {
  let component: BullPage;
  let fixture: ComponentFixture<BullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
