import { IsNotEmpty } from 'class-validator';

export class Name {
  @IsNotEmpty()
  public readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static fromString(value: string): Name {
    return new Name(value);
  }
}
