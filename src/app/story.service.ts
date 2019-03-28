import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'key';
import { Observable } from 'rxjs';
import { StoryInterface } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private http: HttpClient) {}

  public uri: string = environment.API;

  getActiveStories(): Observable<StoryInterface> {
    return this.http.get<StoryInterface>(`${this.uri}/story/activeStories`);
  }
}
