import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  subscription;//: Subscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.username = this.navParams.get('username');
    this.subscription = this.db.list('/chat').valueChanges().subscribe(data => {
      this.messages = data;
    });
  };

  sendMessage(){
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then(() => {

    });/*.catch(() => {
      // Not working for some reason
    });*/
  }

  ionViewDidLoad() {
    console.log(this.navParams);
  }
}
