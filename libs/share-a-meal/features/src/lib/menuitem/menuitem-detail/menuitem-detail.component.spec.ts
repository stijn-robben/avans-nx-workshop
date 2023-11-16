import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemDetailComponent } from './menuitem-detail.component';

describe('MenuItemDetailComponent', () => {
  let component: MenuItemDetailComponent;
  let fixture: ComponentFixture<MenuItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
