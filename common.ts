export class commonService {
  age = 0;
  constructor() {}

  private d() {
    return (this.age = this.age - 1);
  }
}
