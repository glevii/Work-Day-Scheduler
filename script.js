var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do"))
var hourBlock = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var militaryHourBlock = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().hour()

for (let i = 0; i < hourBlock.length; i++) {
    var timeStatus = ""
    if (militaryHourBlock[i] === currentHour)  {
          timeStatus = "present"
    }
    if (militaryHourBlock[i] > currentHour) {
        timeStatus = "future"
    }

    if (militaryHourBlock[i] < currentHour) {
        timeStatus = "past"
    }
    
    $(".container").append(`   
    <div class="row">
    <div class="col-sm-1 hour">${hourBlock[i]}</div>
    <div class="col-sm-10 w-100"><textarea name="" id="" class="form-control ${timeStatus} "></textarea></div>
    <div class="col-sm-1 text-left"><button class="saveBtn"><i class="far fa-save"></i></button></div>
  </div>
`)
}


// create a click event , on click, use local storage to save text area.