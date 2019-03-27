import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public uri: string = 'http://localhost:5000/news';
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
