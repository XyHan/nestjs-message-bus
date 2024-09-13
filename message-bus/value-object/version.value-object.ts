import { IsPositive } from 'class-validator';

export class Version {
  @IsPositive()
  public readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static fromNumber(value: number): Version {
    return new Version(value);
  }
}
