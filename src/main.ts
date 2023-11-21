import 'zone.js';
import { Component, computed, effect, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `full name : <p (click)="setName('syed ')"> {{fullName()}} </p>`,
})
export class App {
  public name = 'Angular';
  public i = 'test';
  public firstName = signal('imran ');
  public lastName = signal('ali syed');
  public fullName = computed(()=>this.firstName() + this.lastName())

  setName(name: any){
    this.firstName.set(name);
  }
  constructor(){
    effect(()=>console.log('fullname changed to ',this.fullName()))

  }

}

bootstrapApplication(App);
