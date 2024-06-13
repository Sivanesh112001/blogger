import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'] // Corrected from styleUrl to styleUrls
})
export class ThirdComponent {

constructor(private http: HttpClient){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
public fetchDetials(){
  console.log("fetching detials");
  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
    (resp: any) => {
      console.log(resp);
    },
    (error: any) => {
      console.error('Error:', error);
    }
  );
  
}
  // httpClient = inject(HttpClient);
  // data: any;

  // ngOnInit(): void {
  //   this.fetchData();
  // }

  // fetchData() {
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  //   .subscribe((data: any) => {
  //       console.log('Data fetched:', data); // More explicit console log
  //       this.data = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error); // More explicit error log
  //     }
  //   );
  // }
}
