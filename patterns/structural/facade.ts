class GroupTravel {
  private flightBooking: FlightBookingSystem;
  private hotelReservation: HotelReservationSystem;
  private restaurantReservation: RestaurantReservationSystem;
  private tourBooking: TourBookingSystem;
  private orderSystem: OrderSystem;
  private paymentSystem: PaymentSystem;

  constructor() {
    this.flightBooking = new FlightBookingSystem();
    this.hotelReservation = new HotelReservationSystem();
    this.restaurantReservation = new RestaurantReservationSystem();
    this.tourBooking = new TourBookingSystem();
    this.orderSystem = new OrderSystem();
    this.paymentSystem = new PaymentSystem();
  }

  purchase(): void {
    this.orderSystem.createOrder();
    this.flightBooking.bookFlight();
    this.hotelReservation.bookHotel();
    this.restaurantReservation.bookRestaurant();
    this.tourBooking.bookTour();
    this.paymentSystem.processPayment();
    console.log("Trip purchase completed!");
  }

  cancel(): void {
    this.flightBooking.cancelFlight();
    this.hotelReservation.cancelHotel();
    this.restaurantReservation.cancelRestaurant();
    this.tourBooking.cancelTour();
    this.paymentSystem.refundPayment();
    this.orderSystem.cancelOrder();
    console.log("Trip cancellation completed!");
  }
}

class FlightBookingSystem {
  bookFlight(): void {
    console.log("Flight booked.");
  }
  cancelFlight(): void {
    console.log("Flight canceled.");
  }
}

class HotelReservationSystem {
  bookHotel(): void {
    console.log("Hotel booked.");
  }
  cancelHotel(): void {
    console.log("Hotel canceled.");
  }
}

class RestaurantReservationSystem {
  bookRestaurant(): void {
    console.log("Restaurant booked.");
  }
  cancelRestaurant(): void {
    console.log("Restaurant canceled.");
  }
}

class TourBookingSystem {
  bookTour(): void {
    console.log("Tour booked.");
  }
  cancelTour(): void {
    console.log("Tour canceled.");
  }
}

class OrderSystem {
  createOrder(): void {
    console.log("Order created.");
  }
  cancelOrder(): void {
    console.log("Order canceled.");
  }
}

class PaymentSystem {
  processPayment(): void {
    console.log("Payment processed.");
  }
  refundPayment(): void {
    console.log("Payment refunded.");
  }
}

class Demo {
  static run() {
    const groupTravel = new GroupTravel();

    console.log("Starting trip purchase process...");
    groupTravel.purchase();

    console.log("\nStarting trip cancellation process...");
    groupTravel.cancel();
  }
}

export default Demo;
