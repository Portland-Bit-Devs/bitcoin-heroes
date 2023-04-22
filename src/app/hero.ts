// export interface Hero {
//   id: number;
//   name: string;
//   power: string;
//   quote?: string
// }

export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public quote?: string
  ) { }
}
