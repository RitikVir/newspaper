import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPollData, RequestPollResponseData } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../key';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ClientServService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  requestPoll(data: RequestPollData): Observable<RequestPollResponseData> {
    this.spinner.show();
    return this.http.post<RequestPollResponseData>(
      environment.API + '/client/requestpoll',
      data
    );
  }
  requestStory(data): Observable<{ status }> {
    this.spinner.show();
    return this.http.post<{ status }>(
      environment.API + '/client/requeststory',
      data
    );
  }
  addImageToPoll(id, uploads) {
    this.spinner.show();
    return this.http.post<{ status }>(
      environment.API + '/client/addpollimage/' + id,
      uploads
    );
  }
  makePayment(transactionInfo: any): Observable<{ formString: string }> {
    this.spinner.show();
    return this.http.post<{ formString: string }>(
      environment.API + '/client/startpayment',
      transactionInfo
    );
  }
}
