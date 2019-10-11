import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { ITransaction, Transaction } from 'app/shared/model/transaction.model';
import { TransactionService } from './transaction.service';
import { IClient } from 'app/shared/model/client.model';
import { ClientService } from 'app/entities/client/client.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-transaction-update',
  templateUrl: './transaction-update.component.html'
})
export class TransactionUpdateComponent implements OnInit {
  isSaving: boolean;

  clients: IClient[];

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    dateexpediteur: [null, [Validators.required]],
    montant: [null, [Validators.required]],
    idexpediteur: [null, [Validators.required]],
    dateretrait: [null, [Validators.required]],
    iddestinataire: [null, [Validators.required]],
    iduserexpediteur: [null, [Validators.required]],
    iduserrecepteur: [null, [Validators.required]],
    commission: [null, [Validators.required]],
    commissionexpediteur: [null, [Validators.required]],
    commissionrecepteur: [null, [Validators.required]],
    taxe: [null, [Validators.required]],
    status: [null, [Validators.required]],
    code: [null, [Validators.required]],
    client: [null, Validators.required],
    user: [null, Validators.required]
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected transactionService: TransactionService,
    protected clientService: ClientService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ transaction }) => {
      this.updateForm(transaction);
    });
    this.clientService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IClient[]>) => mayBeOk.ok),
        map((response: HttpResponse<IClient[]>) => response.body)
      )
      .subscribe((res: IClient[]) => (this.clients = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(transaction: ITransaction) {
    this.editForm.patchValue({
      id: transaction.id,
      dateexpediteur: transaction.dateexpediteur != null ? transaction.dateexpediteur.format(DATE_TIME_FORMAT) : null,
      montant: transaction.montant,
      idexpediteur: transaction.idexpediteur,
      dateretrait: transaction.dateretrait != null ? transaction.dateretrait.format(DATE_TIME_FORMAT) : null,
      iddestinataire: transaction.iddestinataire,
      iduserexpediteur: transaction.iduserexpediteur,
      iduserrecepteur: transaction.iduserrecepteur,
      commission: transaction.commission,
      commissionexpediteur: transaction.commissionexpediteur,
      commissionrecepteur: transaction.commissionrecepteur,
      taxe: transaction.taxe,
      status: transaction.status,
      code: transaction.code,
      client: transaction.client,
      user: transaction.user
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const transaction = this.createFromForm();
    if (transaction.id !== undefined) {
      this.subscribeToSaveResponse(this.transactionService.update(transaction));
    } else {
      this.subscribeToSaveResponse(this.transactionService.create(transaction));
    }
  }

  private createFromForm(): ITransaction {
    return {
      ...new Transaction(),
      id: this.editForm.get(['id']).value,
      dateexpediteur:
        this.editForm.get(['dateexpediteur']).value != null
          ? moment(this.editForm.get(['dateexpediteur']).value, DATE_TIME_FORMAT)
          : undefined,
      montant: this.editForm.get(['montant']).value,
      idexpediteur: this.editForm.get(['idexpediteur']).value,
      dateretrait:
        this.editForm.get(['dateretrait']).value != null ? moment(this.editForm.get(['dateretrait']).value, DATE_TIME_FORMAT) : undefined,
      iddestinataire: this.editForm.get(['iddestinataire']).value,
      iduserexpediteur: this.editForm.get(['iduserexpediteur']).value,
      iduserrecepteur: this.editForm.get(['iduserrecepteur']).value,
      commission: this.editForm.get(['commission']).value,
      commissionexpediteur: this.editForm.get(['commissionexpediteur']).value,
      commissionrecepteur: this.editForm.get(['commissionrecepteur']).value,
      taxe: this.editForm.get(['taxe']).value,
      status: this.editForm.get(['status']).value,
      code: this.editForm.get(['code']).value,
      client: this.editForm.get(['client']).value,
      user: this.editForm.get(['user']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITransaction>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackClientById(index: number, item: IClient) {
    return item.id;
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }
}
