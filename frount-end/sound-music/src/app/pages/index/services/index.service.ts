import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  constructor() {}
  http = inject(HttpClient);
  fetchDataTable() {
    return this.http.get<Index>('api/index').pipe(
      map((responseData) => {
        return responseData;
      })
    );
  }
}
export interface Index {
  posts: Post[];
  user_profile: User;
}
interface Post {
  id: number;
  user: string;
  music: string;
  caption:string;
  created_At: string;
}
interface User {
  id_user: number;
  user: any;
  bio: string;
  location: string;
}
