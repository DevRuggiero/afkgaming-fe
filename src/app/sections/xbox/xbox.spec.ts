import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xbox } from './xbox';

describe('Xbox', () => {
  let component: Xbox;
  let fixture: ComponentFixture<Xbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
