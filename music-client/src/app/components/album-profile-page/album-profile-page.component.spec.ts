import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumProfilePageComponent } from './album-profile-page.component';

describe('AlbumProfilePageComponent', () => {
  let component: AlbumProfilePageComponent;
  let fixture: ComponentFixture<AlbumProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
