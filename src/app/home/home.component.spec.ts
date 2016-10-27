/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DataListService } from '../shared/data-list/data-list.service';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {
  let http: any;
  let ds = new DataListService(http);
  let component: any;

  describe('Instantiation', () => {
    beforeAll(() => {
      component = new HomeComponent(ds);
    });

    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });
  });
});
