import { Gender } from "../models/gender";
import { Role } from "../models/role";
import { User } from "../models/user";

export const users: User[] = [
    { id: 1, name: 'Michele', birthdate: '1993-05-31', gender: Gender.Male, role: Role.Admin, disabled: false },
    { id: 2, name: 'Virginia', birthdate: '1994-09-24', gender: Gender.Female, role: Role.Basic, disabled: false },
    { id: 1, name: 'Simone', birthdate: '1997-04-30', gender: Gender.Male, role: Role.Basic, disabled: false }
];