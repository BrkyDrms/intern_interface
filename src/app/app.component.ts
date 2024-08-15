import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ReactiveService } from './services/reactive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private ReactiveService: ReactiveService) { }

  ngOnInit(): void {
    this.ReactiveService.getUsers().forEach(
      response => {
        this.data = response;
      }
    );
  }
}

