import { Component } from '@angular/core';
import { JpaService } from '../../services/jpa.service';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  selector: 'app-user-fetch',
  templateUrl: './user-fetch.component.html',
  styleUrls: ['./user-fetch.component.css']
})
export class UserFetchComponent {
  jpaUsers: any[] = [];
  reactiveUsers: any[] = [];
  jpaFetchTime: number = 0;
  reactiveFetchTime: number = 0;

  constructor(private jpaService: JpaService, private reactiveService: ReactiveService) {}

  fetchJpaUsers() {
    const startTime = performance.now();
    this.jpaService.getUsers().subscribe((data) => {
      console.log('JPA Users:', data);  
      this.jpaUsers = data;
      this.jpaFetchTime = performance.now() - startTime;
    }, error => {
      console.error('JPA Fetch Error:', error);  
    });
  }

  fetchReactiveUsers() {
    const startTime = performance.now();
    this.reactiveService.getUsers().subscribe((data) => {
      console.log('Reactive Users:', data);  
      this.reactiveUsers = data;
      this.reactiveFetchTime = performance.now() - startTime;
    }, error => {
      console.error('Reactive Fetch Error:', error);  
    });
  }
}
