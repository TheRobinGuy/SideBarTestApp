import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.username = this.navParams.get('username');
  }

  sendMessage(){
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    })
  }

  ionViewDidLoad() {
    console.log(this.navParams);
  }

  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser() {
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ChatPage, {
        username : this.username
      });
    }else{
      this.showAlert("Error", "Invalid UserName");
    }
  }

}
