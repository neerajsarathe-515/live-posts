import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  constructor(private router: Router) { }
  isLoggedIn = false;

  
  ngOnInit(): void {
    let value = localStorage.getItem(JSON.stringify(this.isLoggedIn)) === 'true';

    console.log(value);

    if(value){
      this.router.navigate(['/table']);
    }else{
      this.router.navigate(['/true']);
    }

    let username = '';
    let password = '';

    this.form = new FormGroup({
      username: new FormControl(username, [Validators.required, Validators.minLength(3) ,Validators.maxLength(20)]),
      password: new FormControl(password, Validators.required),
    })

  }

  onSubmit(){
    console.log('submission confirmed');
    // console.log( this.form.value.username);
    // console.log(this.form.value.password);

    if(this.form.value.username =='deeploop' && this.form.value.password =='deeploop'){

      console.log('navigating to tables');
      this.isLoggedIn = true;
      localStorage.setItem('LoginMode', JSON.stringify(this.isLoggedIn));
    }else{
      alert("Enter valid UserName/ Password");
      
    }
    
  }

}
