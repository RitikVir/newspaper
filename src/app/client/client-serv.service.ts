import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPollData, RequestPollResponseData } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../key';

@Injectable({
  providedIn: 'root'
})
export class ClientServService {
  constructor(private http: HttpClient) {}

  requestPoll(data: RequestPollData): Observable<RequestPollResponseData> {
    return this.http.post<RequestPollResponseData>(
      environment.API + '/client/requestpoll',
      data
    );
  }

  addImageToPoll(id, uploads) {
    return this.http.post(
      environment.API + '/client/addpollimage/' + id,
      uploads
    );
  }
}
