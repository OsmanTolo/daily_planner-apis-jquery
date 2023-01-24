$(document).ready(function () {
  let $currentDate = $("#currentDay");

  setInterval(() => {
    let time = moment().format("dddd, MMM Do, h:mm:ss A");
    $currentDate.text(time);
  }, 1000);

  // Todo: Get the items from the local storage at every refresh
  function getStoredTasks() {
    let storedTasks = { ...localStorage };

    for (const property in storedTasks) {
      if ($(`.${property}`)) {
        $(`.${property}`).text(`${storedTasks[property]}`);
      }
    }
  }

  let businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  let $timeBlockContainerEl = $(".container");
  businessHours.forEach((hour, index) => {
    $timeBlockContainerEl.append(
      `
      <div class="row">
        <div class="col hour">${hour}${index >= 3 ? "PM" : "AM"}</div>
        <textarea
          class="col-10 ${hour}${index >= 3 ? "PM" : "AM"}"
          name="description"
          id="description"
          data-time="${index + 9}"
        ></textarea>
        <button class="col saveBtn text-center" id="save-btn" data-time="${hour}${
        index >= 3 ? "PM" : "AM"
      }">
          <i class="fas fa-save margin-auto d-block "></i>
        </button>
      </div>
      `
    );

    $("textarea").each(function () {
      let timeNow = moment().hours();
      let textAreaTime = parseInt($(this).attr("data-time"));
      if (timeNow > textAreaTime) {
        $(this).addClass("past");
      } else if (timeNow === textAreaTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });

  // Save the textarea content to local storage when the btn is pressed
  $("button").on("click", function (e) {
    // Get the content of the text area
    if (e.target.matches("i")) {
      let $textAreaValue = $(e.target.parentElement).siblings("textarea").val();
      // Save textarea content to local storage using data-time as key
      localStorage.setItem(
        `${$(e.target.parentElement).attr("data-time")}`,
        $textAreaValue
      );
    } else {
      let $textAreaValue = $(e.target).siblings("textarea").val();
      localStorage.setItem(`${$(e.target).attr("data-time")}`, $textAreaValue);
    }
  });
  getStoredTasks();
});
