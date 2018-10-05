export class Duration {
  private hour: number;
  private minute: number;

  constructor($hour: number, $minute: number) {
    this.hour = $hour;
    this.minute = $minute;
  }

  /**
   * Getter $hour
   * @return {number}
   */
  public get $hour(): number {
    return this.hour;
  }

  /**
   * Setter $hour
   * @param {number} value
   */
  public set $hour(value: number) {
    this.hour = value;
  }

  /**
   * Getter $minute
   * @return {number}
   */
  public get $minute(): number {
    return this.minute;
  }

  /**
   * Setter $minute
   * @param {number} value
   */
  public set $minute(value: number) {
    this.minute = value;
  }
}
