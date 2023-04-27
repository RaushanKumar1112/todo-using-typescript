import { HasOutput } from "./../interfaces/HasOutput";

export class Work {
  work: string;
  // date: string;

  constructor(w: string) {
    // this.date = d;
    this.work = w;
  }

  output() {
    return this.work;
  }
}
