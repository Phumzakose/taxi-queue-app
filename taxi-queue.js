function TaxiQueue() {
  var people_counter = 0;
  // if (people) {
  //   people_counter = people;
  // }
  var taxi_counter = 0;
  // if (taxi) {
  //   taxi_counter = taxi;
  // }

  function joinQueue() {
    return people_counter++;
  }

  function leaveQueue() {
    if (people_counter > 0) {
      return people_counter--;
    }
  }

  function joinTaxiQueue() {
    taxi_counter++;
  }

  function queueLength() {
    return people_counter;
  }

  function taxiQueueLength() {
    return taxi_counter;
  }

  function taxiDepart() {
    if (taxi_counter > 0) {
      return taxi_counter--;
    }
  }

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
