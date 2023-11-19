import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemEditComponent } from './menuitem-edit.component';

describe('MenuitemEditComponent', () => {
  let component: MenuItemEditComponent;
  let fixture: ComponentFixture<MenuItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
