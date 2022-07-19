import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../servicios/skill-service.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill:any;


  constructor(private skillService:SkillServiceService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data=>{
      this.skill=data;
    })
  }
}
