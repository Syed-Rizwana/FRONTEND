import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Share1,
  UniqueConstraintError,
  Read
} from '../share1';
import { Subscription } from 'rxjs';
import { Share1Service } from '../share1.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit, OnDestroy {
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
  Delete() {
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Delete(this.User.email).subscribe(
        (data) => {
          if (data) {
            console.log(data);
            document.write("Deleted Successfully");
          }
          else {
  
           console.log("Failed");}
        })
      }
      
      
             

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
