let $currentTime = $("#currentDay");

setInterval(() => {
  let time = moment().format("dddd, MMM Do, h:mm:ss A");
  $currentTime.text(time);
}, 1000);
