import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsData = []

  constructor(private _eventService : EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.eventsData = res,
      error => console.log(error)
    )
  }

}