import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ApiComponent } from './api.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

class MockService{
  url='http://jsonplaceholder.typicode.com/';
  data = [1,2,3];
  httpClient: HttpClient;

  getData(){
    return new Observable<Object>();
  }
}


describe('ApiComponent', () => {
  let component: ApiComponent;
  let mockService : MockService;
  let fixture: ComponentFixture<ApiComponent>;


  beforeEach(() => { 
    mockService = new  MockService();
    component = new ApiComponent(mockService);

  });

  afterEach(() => {
    mockService = null;
    component = null;
  });


 
  it('should create api component', () => {
    expect(component).toBeTruthy();
  });



  it('service should be created', () => {
    expect(mockService).toBeTruthy();
   });


  it('should call the service method', () => {
    mockService = new MockService;
    component  = new ApiComponent(mockService);

    const spy = spyOn(mockService, 'getData').and.returnValue(new Observable<object>());

    component.ngOnInit(); 

    expect(spy).toHaveBeenCalled();

  })

});
