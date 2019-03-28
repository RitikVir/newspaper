import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'key';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public uri: string = environment.API;
  constructor(private http: HttpClient) {}

  getWriterProfile(
    userId
  ): Observable<{ success: boolean; message: string; writerInfo: Object }> {
    return this.http.post<{
      success: boolean;
      message: string;
      writerInfo: Object;
    }>(`${this.uri}/writer/profile`, { userId });
  }
}
