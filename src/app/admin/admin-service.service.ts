import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clientData } from '../interfaces';
import { environment } from '../../../key';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  addClient(data: clientData): Observable<{ status }> {
    return this.http.post<{ status }>(
      environment.API + '/admin/addclient',
      data
    );
  }
  addWriter(data: clientData): Observable<{ status }> {
    return this.http.post<{ status }>(
      environment.API + '/admin/addwriter',
      data
    );
  }
  pendingStoryRequest() {
    return this.http.get(environment.API + '/admin/publishstory');
  }
  pendingPollRequest() {
    return this.http.get(environment.API + '/admin/publishpoll');
  }
}
