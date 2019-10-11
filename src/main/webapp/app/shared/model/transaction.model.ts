import { Moment } from 'moment';
import { IClient } from 'app/shared/model/client.model';
import { IUser } from 'app/core/user/user.model';

export interface ITransaction {
  id?: number;
  dateexpediteur?: Moment;
  montant?: number;
  idexpediteur?: number;
  dateretrait?: Moment;
  iddestinataire?: number;
  iduserexpediteur?: number;
  iduserrecepteur?: number;
  commission?: number;
  commissionexpediteur?: number;
  commissionrecepteur?: number;
  taxe?: number;
  status?: string;
  code?: number;
  client?: IClient;
  user?: IUser;
}

export class Transaction implements ITransaction {
  constructor(
    public id?: number,
    public dateexpediteur?: Moment,
    public montant?: number,
    public idexpediteur?: number,
    public dateretrait?: Moment,
    public iddestinataire?: number,
    public iduserexpediteur?: number,
    public iduserrecepteur?: number,
    public commission?: number,
    public commissionexpediteur?: number,
    public commissionrecepteur?: number,
    public taxe?: number,
    public status?: string,
    public code?: number,
    public client?: IClient,
    public user?: IUser
  ) {}
}
