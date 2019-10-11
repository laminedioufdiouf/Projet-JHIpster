export interface IClient {
  id?: number;
  numeropiece?: number;
  nomcomplet?: string;
  telephone?: number;
}

export class Client implements IClient {
  constructor(public id?: number, public numeropiece?: number, public nomcomplet?: string, public telephone?: number) {}
}
