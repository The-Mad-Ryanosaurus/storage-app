import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  
  myStatus:string="";

  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  saveStatus(){

    this.storage.create()
    .then(
      ()=>{
        this.storage.set("Status", this.myStatus)
        .then(()=>{
        this.navCtrl.navigateBack('/home');
        })
        .catch();
      }
    )
    .catch();




  }
  ionViewWillEnter(){
    this.storage.create()
    .then(
      ()=>{
        this.storage.get("Status")
        .then(
          (data)=>{
            this.myStatus=data;
          }
        )
        .catch()
      }
      
    )
    .catch();
    this.storage.get
  }


}


