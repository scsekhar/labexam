import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts = "";
  index=0;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    console.log("started")
    this.contactService.getContacts().subscribe(response=>{
      console.log(response)
      if (response['status'] == 'success') {
        this.contacts = response['data']
      } else{
        console.log(response)
      }
    })
    }

}