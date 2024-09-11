import { Component ,ChangeDetectorRef} from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})export class UsersDashboardComponent {

  users_list: IUser[] = [];
  selected_user: IUser = {
    id: 0, 
    name: "",
    username: "",
    phone: "",
    website: ""
  };
  message: string = "233436_VICENTE RINCON ";

  constructor(private _service: UserService, private cd: ChangeDetectorRef) {
    this._service.getAll().subscribe(
      response => this.users_list = response
    );
  }

  seleccionar_usuario(user: IUser): void {
    this.selected_user = { ...user }; 
  }

  agregarUsuario(user: IUser): void {
    user.id = this.users_list.length ? Math.max(...this.users_list.map(u => u.id)) + 1 : 1;
    this.users_list.push({ ...user }); 
    this.cd.detectChanges(); 
  }

  eventoRecibido(user: IUser): void {
    this.agregarUsuario(user);
  }
}
