import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemListComponent } from './menuitem-list.component';

describe('MenuitemListComponent', () => {
  let component: MenuItemListComponent;
  let fixture: ComponentFixture<MenuItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
