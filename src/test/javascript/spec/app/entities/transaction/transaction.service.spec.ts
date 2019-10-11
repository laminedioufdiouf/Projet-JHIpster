import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { TransactionService } from 'app/entities/transaction/transaction.service';
import { ITransaction, Transaction } from 'app/shared/model/transaction.model';

describe('Service Tests', () => {
  describe('Transaction Service', () => {
    let injector: TestBed;
    let service: TransactionService;
    let httpMock: HttpTestingController;
    let elemDefault: ITransaction;
    let expectedResult;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(TransactionService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Transaction(0, currentDate, 0, 0, currentDate, 0, 0, 0, 0, 0, 0, 0, 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateexpediteur: currentDate.format(DATE_TIME_FORMAT),
            dateretrait: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a Transaction', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateexpediteur: currentDate.format(DATE_TIME_FORMAT),
            dateretrait: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateexpediteur: currentDate,
            dateretrait: currentDate
          },
          returnedFromService
        );
        service
          .create(new Transaction(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a Transaction', () => {
        const returnedFromService = Object.assign(
          {
            dateexpediteur: currentDate.format(DATE_TIME_FORMAT),
            montant: 1,
            idexpediteur: 1,
            dateretrait: currentDate.format(DATE_TIME_FORMAT),
            iddestinataire: 1,
            iduserexpediteur: 1,
            iduserrecepteur: 1,
            commission: 1,
            commissionexpediteur: 1,
            commissionrecepteur: 1,
            taxe: 1,
            status: 'BBBBBB',
            code: 1
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateexpediteur: currentDate,
            dateretrait: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of Transaction', () => {
        const returnedFromService = Object.assign(
          {
            dateexpediteur: currentDate.format(DATE_TIME_FORMAT),
            montant: 1,
            idexpediteur: 1,
            dateretrait: currentDate.format(DATE_TIME_FORMAT),
            iddestinataire: 1,
            iduserexpediteur: 1,
            iduserrecepteur: 1,
            commission: 1,
            commissionexpediteur: 1,
            commissionrecepteur: 1,
            taxe: 1,
            status: 'BBBBBB',
            code: 1
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateexpediteur: currentDate,
            dateretrait: currentDate
          },
          returnedFromService
        );
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Transaction', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
