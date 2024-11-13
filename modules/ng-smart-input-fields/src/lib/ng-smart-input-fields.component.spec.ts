import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSmartInputFieldsComponent } from './ng-smart-input-fields.component';

describe('NgSmartInputFieldsComponent', () => {
  let component: NgSmartInputFieldsComponent;
  let fixture: ComponentFixture<NgSmartInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSmartInputFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgSmartInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
