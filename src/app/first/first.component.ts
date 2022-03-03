import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  code: string | null= null;
  id: string | null = null;
  state: string | null = null;

  showKeys: boolean = false;

  keyForm = new FormGroup({
    privateKey: new FormControl(''),
    publicKey: new FormControl('')
  })

  constructor(private route: ActivatedRoute, private http:HttpClient) {
    this.showKeys = false;
    this.route.queryParams.subscribe(param => {
        this.code = param['code'];
        this.id =param['account-id']
        this.state = param['state']
        if(!this.id && !this.code)
        {
          window.location.href="https://app.lightfunnels.com/admin/oauth?client_id=L7BnATx2KWLugQsa&state=SbxT8eAprbU3N8WPN&redirect_uri=http://localhost:3000/first&response_type=code&scope=orders"
        }
        else
        {
          this.showKeys = true
          this.http.post('http://localhost:4000/lfauth',{code:this.code, 'client-id':"L7BnATx2KWLugQsa", state:"SbxT8eAprbU3N8WPNfLkBWnVxXXPurk3hUNU5M6BG42gVwtX"}, {headers: new HttpHeaders({'Content-Type':'application/json'})}).subscribe(data => {
            console.log(data);
          })
        }

    })
  }

  onSubmit() {
    let payload = {
      privateKey: this.keyForm.value.privateKey,
      publicKey: this.keyForm.value.publicKey,
      accountID: this.id
    }
    this.http.post('http://localhost:4000/klaviyoKeys', payload, {headers: new HttpHeaders({'Content-Type':'application/json'})})
    .subscribe(data => {
      console.log(data);
    })
  }
}
