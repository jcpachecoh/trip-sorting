import { Duration } from './Duration';

export class Deal {
  private transport: string;
  private departure: string;
  private arrival: string;
  private duration: Duration;
  private cost: number;
  private discount: number;
  private reference: string;

  constructor(
    $transport: string,
    $departure: string,
    $arrival: string,
    $duration: Duration,
    $cost: number,
    $discount: number,
    $reference: string
  ) {
    this.transport = $transport;
    this.departure = $departure;
    this.arrival = $arrival;
    this.duration = $duration;
    this.cost = $cost;
    this.discount = $discount;
    this.reference = $reference;
  }

  /**
   * Getter $transport
   * @return {string}
   */
  public get $transport(): string {
    return this.transport;
  }

  /**
   * Setter $transport
   * @param {string} value
   */
  public set $transport(value: string) {
    this.transport = value;
  }

  /**
   * Getter $departure
   * @return {string}
   */
  public get $departure(): string {
    return this.departure;
  }

  /**
   * Setter $departure
   * @param {string} value
   */
  public set $departure(value: string) {
    this.departure = value;
  }

  /**
   * Getter $arrival
   * @return {string}
   */
  public get $arrival(): string {
    return this.arrival;
  }

  /**
   * Setter $arrival
   * @param {string} value
   */
  public set $arrival(value: string) {
    this.arrival = value;
  }

  /**
   * Getter $duration
   * @return {Duration}
   */
  public get $duration(): Duration {
    return this.duration;
  }

  /**
   * Setter $duration
   * @param {Duration} value
   */
  public set $duration(value: Duration) {
    this.duration = value;
  }

  /**
   * Getter $cost
   * @return {number}
   */
  public get $cost(): number {
    return this.cost;
  }

  /**
   * Setter $cost
   * @param {number} value
   */
  public set $cost(value: number) {
    this.cost = value;
  }

  /**
   * Getter $discount
   * @return {number}
   */
  public get $discount(): number {
    return this.discount;
  }

  /**
   * Setter $discount
   * @param {number} value
   */
  public set $discount(value: number) {
    this.discount = value;
  }

  /**
   * Getter $reference
   * @return {string}
   */
  public get $reference(): string {
    return this.reference;
  }

  /**
   * Setter $reference
   * @param {string} value
   */
  public set $reference(value: string) {
    this.reference = value;
  }
}
