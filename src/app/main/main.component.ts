import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


//import the service
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit  {

  /**
   * 
   * NOTE: We can inject services more easily using the inject() function
   * but is not allowed to be used inside the life cycle hooks
   * and is STILL RECOMMENDED TO USE THE CONSTRUCTOR TO INJECT DEPENDENCIES SUCH AS SERVICES, ETC
   * 
   */
  serviceInjector = inject(HttpService);

  //get all posts using the injected service
  public posts$!: Observable<any[]>;
  componentGetAllPosts(){
     this.posts$ = this.serviceInjector.getAllPosts(); 
  }

  ngOnInit(): void
  {
    this.componentGetAllPosts();
  }

}
