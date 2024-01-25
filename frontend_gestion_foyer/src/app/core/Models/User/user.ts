import {Role} from "../Role/role";

export class User {
  id!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  role!: Role;

}
