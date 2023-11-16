import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuitemDetailComponent } from './menuitem-detail.component';

describe('MenuitemDetailComponent', () => {
  let component: MenuitemDetailComponent;
  let fixture: ComponentFixture<MenuitemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuitemDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuitemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
