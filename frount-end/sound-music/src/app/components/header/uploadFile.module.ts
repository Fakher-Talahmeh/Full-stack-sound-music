
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  uploadFile(formData:FormData): Observable<any> {
    console.log(formData);
    
    return this.http.post('api/upload', formData);
  }
}
