import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input() set user(value: IUser) {
    this._user = { ...value }; 
  }
  get user(): IUser {
    return this._user;
  }
  private _user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  };

  @Output() addUserEvent = new EventEmitter<IUser>();

  mostrar(): void {
    console.log(this.user);
  }

  enviar(): void {
    this.addUserEvent.emit(this.user);
  }

}
