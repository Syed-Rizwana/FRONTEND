import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Share1,
  UniqueConstraintError,
  Read
} from '../share1';
import { Subscription } from 'rxjs';
import { Share1Service } from '../share1.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnDestroy {
  constructor(private Service: Share1Service) { }
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  User: Share1 = {
    title: '',
    name: '',
    email: '',
    yourstory: ''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  a = [];
  Read() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Read(this.User.email).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
          console.log(data.Result);;
          this.a = data.Result[0];
          console.log(this.a);

        }
        else {

          console.log("Failed");
        }
      }
    );
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}