import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelServiceService } from '../../services/marvel-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() hero:any;

  constructor(private api:MarvelServiceService, private router:Router) { }

  ngOnInit(): void {
    
  }
  

}
