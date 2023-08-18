import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this line
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-womenmurders1',
  templateUrl: './womenmurders1.component.html',
  styleUrls: ['./womenmurders1.component.css']
})
 export class Womenmurders1Component {
  currentIndex = 0;
  totalStories = 3; // Update this value with the actual total number of stories

  previousStory() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.totalStories - 1;
    }
  }

  nextStory() {
    this.currentIndex++;
    if (this.currentIndex >= this.totalStories) {
      this.currentIndex = 0;
    }
  } 
 
}
