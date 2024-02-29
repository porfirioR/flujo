export class ContactApiRequest {
  constructor(
    public name: string,
    public zipCode: number,
    public property: number,
    public email: string,
    public lastName: string,
    public phone: string
  ) { }
}
