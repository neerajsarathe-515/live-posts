import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  constructor(private router: Router, private postServices : PostService) { }

  public access: any;
  public uname: any;
  public pwd: any;

  ngOnInit(): void {

    this.checkUser();

    let username = '';
    let password = '';

    this.form = new FormGroup({
      username: new FormControl(username, [Validators.required, Validators.minLength(3) ,Validators.maxLength(20)]),
      password: new FormControl(password, Validators.required),
    })

  }

  onSubmit(){
    this.uname = this.form.value.username;
    this.pwd = this.form.value.password
    const isLoggedIn = localStorage.getItem('LoginStatus');
    console.log('submission confirmed');

    if(this.uname =='deeploop' && this.pwd =='deeploop'){
      console.log('navigating to tables');
      localStorage.setItem('UName',this.uname);
      localStorage.setItem('LoginStatus', JSON.stringify(!isLoggedIn));
      this.postServices.getAccess().pipe().subscribe(data =>{

        if((data?.success)){
          localStorage.setItem('access',data?.data?.accessToken);
          this.router.navigate(['/table']);
        }
        else{
          alert("Unable to fetch data");
        }
      })
    }else{
      alert("Enter valid UserName/ Password");

    }
  }

  checkUser(){
    if(localStorage.getItem('LoginStatus')){
      this.router.navigate(['/table']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
