import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { request } from 'http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    // Original
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ApiService);

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });
    // Original
    // service = TestBed.inject(ApiService);

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return http data ', ()=>{
      const dummyPosts: Number[] = [1,2,3];

      service.getData().subscribe((data: []) =>{
        expect(data.length).toBeGreaterThan(1);
        expect(data).toEqual(data);

      });

      const req = httpMock.expectOne(`${service.url}/users`);
      expect(req.request.method).toBe('GET');

      req.flush(dummyPosts);
  })

});
