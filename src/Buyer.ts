import validateCPF from "./validateCPF";

export default class Buyer {
  constructor(readonly document: string) {}

  public getDocument(): string {
    return this.document;
  }
  public isDocumentValid(): boolean {
    return validateCPF(this.document);
  }
}
