import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
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
  selector: 'app-update',
  templateUrl:'./update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  constructor(private Service: Share1Service) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: Share1 = {
    title:'',
    name: '',
    email: '',
    yourstory:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Update() {       
  this.ErrorMsg = '';
  this.SuccessMsg = '';
  this.Subscription = this.Service.update(this.User.email, this.User).subscribe(
    (data: any) => {
      if (data) {
        console.log(data);
        console.log(data.Result);
        alert("Updated Successfully");
        this.resetForm();
      } else {   
        console.log("Failed");
      }
    });
}
 Delete() {
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Delete(this.User.email).subscribe(
        (data) => {
          if (data) {
            console.log(data);
            alert("Deleted Successfully");
            this.resetForm();

          }
          else {
  
           console.log("Failed");}
        });
      }
      resetForm() {
        this.User = {
          title: '',
          name: '',
          email: '',
          yourstory: ''
        };
        this.myForm.resetForm();
      }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}