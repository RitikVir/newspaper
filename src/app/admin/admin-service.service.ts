import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clientData } from '../interfaces';
import { environment } from '../../../key';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  addClient(data: clientData): Observable<{ status }> {
    this.spinner.show();
    return this.http.post<{ status }>(
      environment.API + '/admin/addclient',
      data
    );
  }
  addWriter(data: clientData): Observable<{ status }> {
    this.spinner.show();
    return this.http.post<{ status }>(
      environment.API + '/admin/addwriter',
      data
    );
  }
  pendingStoryRequest() {
    this.spinner.show();
    return this.http.get(environment.API + '/admin/publishstory');
  }
  pendingPollRequest() {
    this.spinner.show();
    return this.http.get(environment.API + '/admin/publishpoll');
  }
}
