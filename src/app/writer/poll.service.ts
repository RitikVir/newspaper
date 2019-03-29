import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../key';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private http: HttpClient) { }
  public uri: string = environment.API;

  addPoll(
    pollData: FormData
  ): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.uri}/writer/addPoll`,
      pollData
    );
  }

  getPolls(params): Observable<{ count, result }> {

    return this.http.post<{ count, result }>(`/api/poll`, params);
  }



}
