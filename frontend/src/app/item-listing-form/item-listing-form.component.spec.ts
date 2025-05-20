import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListingFormComponent } from './item-listing-form.component';

describe('ItemListingFormComponent', () => {
  let component: ItemListingFormComponent;
  let fixture: ComponentFixture<ItemListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
