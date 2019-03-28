import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../key';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private http: HttpClient) {}
  public uri: string = environment.API;

  addStory(storyInfo): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.uri}/writer/addStory`,
      storyInfo
    );
  }
}
