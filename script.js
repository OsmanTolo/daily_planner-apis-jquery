$(document).ready(function () {
  let $currentDate = $("#currentDay");
  let $currentTime = moment().format("h:mm:ss A");
  let $currentHour = moment().format("h A");

  setInterval(() => {
    let time = moment().format("dddd, MMM Do, h:mm:ss A");
    $currentDate.text(time);
  }, 1000);

  let businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  let $timeBlockContainerEl = $(".container");
  businessHours.forEach((hour, index) => {
    $timeBlockContainerEl.append(
      `
      <div class="row">
        <div class="col hour">${hour}${index >= 3 ? "PM" : "AM"}</div>
        <textarea
          class="col-10"
          name="description"
          id="description"
        ></textarea>
        <button class="col saveBtn text-center" type="button">
          <i class="fas margin-auto d-block fa-save"></i>
        </button>
      </div>
      `
    );
  });
});
