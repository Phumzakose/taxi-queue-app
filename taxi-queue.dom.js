// DOM element references
var joinButton = document.querySelector(".join_queue");
var leaveButton = document.querySelector(".leave_queue");
var counter = document.querySelector(".count");
var currentPeople = 0;

// create Factory Function instance
const peopleQueueInstance = TaxiQueue();

joinButton.addEventListener("click", function () {
  peopleQueueInstance.joinQueue();
  counter.innerHTML = peopleQueueInstance.queueLength();
});

leaveButton.addEventListener("click", function () {
  peopleQueueInstance.leaveQueue();
  counter.innerHTML = peopleQueueInstance.queueLength();
});

// DOM events

var joinTaxi = document.querySelector(".join_taxi_queue");
var taxiCounter = document.querySelector(".taxi_queue_count");
var taxiDepart = document.querySelector(".depart");
var currentTaxi = 0;

const taxiQueueInstance = TaxiQueue();
joinTaxi.addEventListener("click", function () {
  taxiQueueInstance.joinTaxiQueue();
  taxiCounter.innerHTML = taxiQueueInstance.taxiQueueLength();
});

taxiDepart.addEventListener("click", function () {
  taxiQueueInstance.taxiDepart();
  taxiCounter.innerHTML = taxiQueueInstance.taxiQueueLength();
});
