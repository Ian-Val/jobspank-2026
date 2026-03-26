export enum StatusEnum {
  Applied = "applied",
  Inactive = "inactive",
  Rejected = "rejected",
  Interviewed = "interviewed",
  Offered = "offered",
}

export class JobApplication {
  private _company: string;
  private _position: string;
  private _city: string;
  private _pay: string;
  private _status: StatusEnum;
  private _dateApplied: Temporal.PlainDate | null;
  private _notes: string;

  constructor();
  constructor(
    company: string,
    position: string,
    city: string,
    pay: string,
    status: StatusEnum,
    dateApplied: Temporal.PlainDate | null,
    notes: string,
  );

  constructor(
    company?: string,
    position?: string,
    city?: string,
    pay?: string,
    status?: StatusEnum,
    dateApplied?: Temporal.PlainDate | null,
    notes?: string,
  ) {
    this._company = company ?? "";
    this._position = position ?? "";
    this._city = city ?? "";
    this._pay = pay ?? "";
    this._status = status ?? StatusEnum.Inactive;
    this._dateApplied = dateApplied ?? null;
    this._notes = notes ?? "";
  }

  get company(): string {
    return this._company;
  }
  get position(): string {
    return this._position;
  }
  get city(): string {
    return this._city;
  }
  get pay(): string {
    return this._pay;
  }
  get status(): StatusEnum {
    return this._status;
  }
  get dateApplied(): Temporal.PlainDate | null {
    return this._dateApplied;
  }
  get notes(): string {
    return this._notes;
  }
}
