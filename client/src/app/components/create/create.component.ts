import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name);
    this.router.navigate(['index']);
  }
  ngOnInit() {
  }

  hasToken(){
    return localStorage.getItem("jwtToken");
  }
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
}
