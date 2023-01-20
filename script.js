$(document).ready(function () {
  let $currentTime = $("#currentDay");

  setInterval(() => {
    let time = moment().format("dddd, MMM Do, h:mm:ss A");
    $currentTime.text(time);
  }, 1000);

  let businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  let $timeBlockContainerEl = $(".container");
  businessHours.forEach((hour, index) => {
    $timeBlockContainerEl.append(
      `
      <div class="row">
        <p class="col hour time-block">${hour}${index >= 3 ? "PM" : "AM"}</p>
        <textarea
          class="col-10"
          name="description"
          id="description"
        ></textarea>
        <button class="col btn saveBtn" type="button">
          <i class="fas fa-save"></i>
        </button>
      </div>
      `
    );
  });
});
