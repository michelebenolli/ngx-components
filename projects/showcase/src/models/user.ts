import { Gender } from "./gender";
import { Role } from "./role";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    birthdate?: string;
    role: Role;
    gender?: Gender;
    disabled: boolean;
}