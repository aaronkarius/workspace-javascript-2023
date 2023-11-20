// var hotel = { name, checkIn, checkOut, guests, roomType };
var reservations = [];

function submitReservation() {
  reservations.push({
    name: $("#name").val(),
    checkIn: $("#checkin").val(),
    checkOut: $("#checkout").val(),
    guests: $("#num").val(),
    roomType: $("#room").val(),
  });

  console.log(reservations);
}
$("#submit").click(submitReservation);

function listReservations() {
  $("#reservations").html("");
  $("#reservations").append(
    "<tr><th>Name</th><th>Check In</th><th>Check Out</th><th>Guests</th><th>Room Type</th></tr>"
  );

  reservations.forEach((reservation) => {
    $("#reservations").append(
      `<tr><td>${reservation.name || "N/A"}</td><td>${
        reservation.checkIn || "N/A"
      }</td><td>${reservation.checkOut || "N/A"}</td><td>${
        reservation.guests || "N/A"
      }</td><td>${reservation.roomType || "N/A"}</td></tr>`
    );
  });
}

$("#lists").click(listReservations);
