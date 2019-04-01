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
  requestStory(data): Observable<{ status }> {
    return this.http.post<{ status }>(
      environment.API + '/client/requeststory',
      data
    );
  }
  addImageToPoll(id, uploads) {
    return this.http.post<{ status }>(
      environment.API + '/client/addpollimage/' + id,
      uploads
    );
  }
  makePayment(transactionInfo: any): Observable<{ formString: string }> {
    return this.http.post<{ formString: string }>(
      environment.API + '/client/startpayment',
      transactionInfo
    );
  }
}
