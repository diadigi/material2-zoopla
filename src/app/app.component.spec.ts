/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App: Material2Zoopla', () => {
  describe('Instantiation:', () => {
    let app = new AppComponent();

    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));
  });
});
