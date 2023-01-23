$(document).ready(function () {
  let $currentDate = $("#currentDay");
  let $currentTime = moment().format("h:mm:ss A");
  let $currentHour = moment().format("h A");
  console.log($currentHour);
  console.log($currentTime);

  setInterval(() => {
    let time = moment().format("dddd, MMM Do, h:mm:ss A");
    $currentDate.text(time);
  }, 1000);

  // Todo: Get the items from the local storage at every refresh
  function getStoredtasks() {
    let storedTasks = { ...localStorage };
    console.log(storedTasks);

    for (const property in storedTasks) {
      if ($("textarea").attr("data-time") === property) {
        $("textarea").text(`${storedTasks[property]}`);
      }
    }
  }
  getStoredtasks();

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
        <button class="col saveBtn text-center" id="save-btn" data-time="${hour}${
        index >= 3 ? "PM" : "AM"
      }">
          <i class="fas margin-auto d-block fa-save"></i>
        </button>
      </div>
      `
    );
  });

  // Save the textarea content to local storage when the btn is pressed
  $("button").on("click", function (e) {
    // Get the content of the text area
    let $textAreaValue = $(e.target).siblings("textarea").val();
    // Save textarea content to local storage using data-time as key
    localStorage.setItem(`${$(e.target).attr("data-time")}`, $textAreaValue);
  });
});

// if (currentHour === textareaHour) {
//   $("textarea").addClass("present");
// } else if (currentHour > textareaHour) {
//   $("textarea").addClass("past");
// } else {
//   $("textarea").addClass("future");
// }
