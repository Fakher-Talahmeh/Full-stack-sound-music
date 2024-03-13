import { Component, Input } from '@angular/core';
import { UploadFileService } from './uploadFile.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() username: string | undefined;
  constructor(private uploadFileServ:UploadFileService){

  }
  caption:string = ""
  file:any;
  getName(caption:string){
    this.caption = caption ;
  }
  getFile(event:any){
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const maxFileSizeMB = 10;
      if (selectedFile.size > maxFileSizeMB * 1024 * 1024) {
        alert('File size exceeds the limit.');
        return;
      }

      this.file = selectedFile;
    }
  }
  onUpload(){
    const formData: FormData = new FormData();
    formData.append('user', this.username!);
    formData.append('music_upload', this.file);
    formData.append('caption', this.caption);
    if (this.file) {
      this.uploadFileServ.uploadFile(formData).subscribe(
        (response) => {
          console.log('File uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );
    }
  }
}
