import {UserType} from "./10_01";


const hairdresser = (u: UserType, power: number) => {
   u.hair = u.hair / power;
}