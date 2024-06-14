import { Gender } from "../models/gender";
import { Role } from "../models/role";
import { User } from "../models/user";

export const users: User[] = [
    { id: 1, firstName: 'Michele', lastName: 'Benolli', birthdate: '1993-05-31', gender: Gender.Male, role: Role.Admin, disabled: false },
    { id: 2, firstName: 'Virginia', lastName: 'Chiarelli', birthdate: '1994-09-24', gender: Gender.Female, role: Role.Basic, disabled: false },
    { id: 3, firstName: 'Simone', lastName: 'Benolli', birthdate: '1997-04-30', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 4, firstName: 'Laura', lastName: 'Rossi', birthdate: '1988-12-10', gender: Gender.Female, role: Role.Admin, disabled: false },
    { id: 5, firstName: 'Alessandro', lastName: 'Verdi', birthdate: '1990-11-21', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 6, firstName: 'Chiara', lastName: 'Bianchi', birthdate: '1995-03-15', gender: Gender.Female, role: Role.Basic, disabled: false },
    { id: 7, firstName: 'Marco', lastName: 'Neri', birthdate: '1992-07-09', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 8, firstName: 'Sara', lastName: 'Conti', birthdate: '1989-08-23', gender: Gender.Female, role: Role.Admin, disabled: true },
    { id: 9, firstName: 'Luca', lastName: 'De Luca', birthdate: '1991-01-17', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 10, firstName: 'Elena', lastName: 'Greco', birthdate: '1996-05-05', gender: Gender.Female, role: Role.Basic, disabled: false },
    { id: 11, firstName: 'Andrea', lastName: 'Romano', birthdate: '1993-06-30', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 12, firstName: 'Francesca', lastName: 'Gallo', birthdate: '1987-09-12', gender: Gender.Female, role: Role.Admin, disabled: false },
    { id: 13, firstName: 'Davide', lastName: 'Sartori', birthdate: '1994-10-14', gender: Gender.Male, role: Role.Basic, disabled: true },
    { id: 14, firstName: 'Giulia', lastName: 'Fabbri', birthdate: '1992-04-25', gender: Gender.Female, role: Role.Basic, disabled: false },
    { id: 15, firstName: 'Mattia', lastName: 'Moretti', birthdate: '1990-03-28', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 16, firstName: 'Alice', lastName: 'Marini', birthdate: '1995-11-11', gender: Gender.Female, role: Role.Admin, disabled: false },
    { id: 17, firstName: 'Roberto', lastName: 'Ferrari', birthdate: '1989-02-18', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 18, firstName: 'Martina', lastName: 'Rizzi', birthdate: '1991-12-30', gender: Gender.Female, role: Role.Basic, disabled: true },
    { id: 19, firstName: 'Federico', lastName: 'Gatti', birthdate: '1988-06-20', gender: Gender.Male, role: Role.Basic, disabled: false },
    { id: 20, firstName: 'Anna', lastName: 'Pellegrini', birthdate: '1996-08-09', gender: Gender.Female, role: Role.Admin, disabled: false },
];