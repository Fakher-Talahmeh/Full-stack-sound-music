import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
 tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}
  register(username: string, email: string, password: string, password2: string) {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password, password2 }).pipe(
      tap((response) => {
        if (response && response.access_token) {
          localStorage.setItem(this.tokenKey, response.access_token);
        }
      })
    );
  }
  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response) => {
        if ( response.access_token) {
          localStorage.setItem(this.tokenKey, response.access_token);
          console.log(response.access_token);
          
        }
      })
    );
  }
  autoLogin(): boolean {
    const token = this.getToken();
    return !!token;
  }
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  isAuthenticated(): Observable<boolean> {
    const token = this.getToken();
    return of(!!token);
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}