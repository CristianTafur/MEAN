import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFacturesComponent } from './user-list-factures.component';

describe('UserListFacturesComponent', () => {
  let component: UserListFacturesComponent;
  let fixture: ComponentFixture<UserListFacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListFacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
