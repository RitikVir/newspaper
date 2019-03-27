import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private http: HttpClient) {}
  public uri: string = 'http://localhost:5000/news';

  addStory(storyInfo): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.uri}/story/addStory`,
      storyInfo
    );
  }
}
