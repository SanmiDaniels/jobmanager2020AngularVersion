import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountComponent } from '../../app/components/useraccount/useraccount.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('UseraccountComponent', () => {
  let component: UseraccountComponent;
  let fixture: ComponentFixture<UseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UseraccountComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user account component', () => {
    expect(component).toBeTruthy();
  });
});
