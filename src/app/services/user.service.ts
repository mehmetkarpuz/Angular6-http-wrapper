import { Injectable } from '@angular/core';
import { BaseService } from './baseservice';
import { HttpWrapperService } from '../httpwrapper/httpwrapper.service';
import { Observable } from 'rxjs';
import { BaseResponseModel, UserModel } from '../models/baseresponsemodel';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private httpWrapper: HttpWrapperService) {
    super(httpWrapper);
  }

  getUsers(): Observable<UserModel[]> {
    let apiUrl = '/users';
    return this.httpWrapper.get(apiUrl);
  }
}
