// DOM element references
var joinButton = document.querySelector(".join_queue");
var leaveButton = document.querySelector(".leave_queue");
var counter = document.querySelector(".count");
var added_people = 0;

if (localStorage.getItem("people")) {
  added_people = Number(localStorage.getItem("people"));
}

counter.innerHTML = added_people;

// create Factory Function instance
const peopleQueueInstance = TaxiQueue(added_people);

joinButton.addEventListener("click", function () {
  peopleQueueInstance.joinQueue();
  counter.innerHTML = peopleQueueInstance.queueLength();
  localStorage.setItem("people", peopleQueueInstance.queueLength());
});

leaveButton.addEventListener("click", function () {
  peopleQueueInstance.leaveQueue();
  counter.innerHTML = peopleQueueInstance.queueLength();
  localStorage.setItem("people", peopleQueueInstance.queueLength());
});

// DOM events

var joinTaxi = document.querySelector(".join_taxi_queue");
var taxiCounter = document.querySelector(".taxi_queue_count");
var taxiDepart = document.querySelector(".depart");
var added_Taxi = 0;

if (localStorage.getItem("taxi")) {
  added_Taxi = Number(localStorage.getItem("taxi"));
}

taxiCounter.innerHTML = added_Taxi;

const taxiQueueInstance = TaxiQueue(added_Taxi);
joinTaxi.addEventListener("click", function () {
  taxiQueueInstance.joinTaxiQueue();
  taxiCounter.innerHTML = taxiQueueInstance.taxiQueueLength();
  localStorage.setItem("taxi", taxiQueueInstance.taxiQueueLength());
});

taxiDepart.addEventListener("click", function () {
  taxiQueueInstance.taxiDepart();
  taxiCounter.innerHTML = taxiQueueInstance.taxiQueueLength();
  localStorage.setItem("taxi", taxiQueueInstance.taxiQueueLength());
});
