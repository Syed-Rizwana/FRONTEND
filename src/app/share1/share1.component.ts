import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
 Share1 ,
  UniqueConstraintError,
  Read
} from '../share1';
import { Subscription } from 'rxjs';
import { Share1Service } from '../share1.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-share1',
  templateUrl: './share1.component.html',
  styleUrls: ['./share1.component.css']
})
export class Share1Component {
  isFormDeleted: boolean = false;
  constructor(private Service: Share1Service) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: Share1 = {
    title: '',
    name: '',
    email: '',
    yourstory:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  canshow='';
  a = [];
  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} already Exists`;
        }
        else {
          this.SuccessMsg = `${this.User.yourstory}Inserted Successfully`;
          alert("Inserted Successfully");
          Form.reset();
        }
      }
    });

  }
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


}
