import { Duration } from './Duration';

export class Deal {
  public transport: string;
  public departure: string;
  public arrival: string;
  public duration: Duration;
  public cost: number;
  public discount: number;
  public reference: string;

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
}
