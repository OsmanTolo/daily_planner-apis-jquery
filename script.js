$(document).ready(function () {
  let $currentTime = $("#currentDay");

  setInterval(() => {
    let time = moment().format("dddd, MMM Do, h:mm:ss A");
    $currentTime.text(time);
  }, 1000);

  let businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  let $timeBlockContainerEl = $(".container");
  businessHours.forEach((el) => {
    $timeBlockContainerEl.append(
      `
      <div class="row">
        <p class="col hour time-block">${el}</p>
        <textarea
          class="col-10"
          name="description"
          id="description"
          cols="30"
          rows="4"
        ></textarea>
        <button class="col saveBtn">
          <i class="fas fa-save"></i>
        </button>
      </div>
      `
    );
  });
});
