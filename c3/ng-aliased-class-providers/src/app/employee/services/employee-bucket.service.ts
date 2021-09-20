import { Injectable } from '@angular/core';
import {BucketService} from '../../services/bucket.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBucketService extends BucketService {

  constructor() {
    super();
  }

  removeItem(){
    alert('not for u')
  }
}
