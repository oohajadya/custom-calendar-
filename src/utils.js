export const hoursPerDay = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"]
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


export const getDays = function (month, year) {
    var monthIndex = month
    var date = new Date(year, monthIndex, 1)
    var result = []
    while (date.getMonth() === monthIndex) {
        result.push({
            date: date.getDate(),
            day: date.getDay()
        })
        date.setDate(date.getDate() + 1)
    }
    return result
}

   


export const getCalender = function (month, year) {
    const daysInMonth = getDays(month, year)
    var daysIndex = 0
    const calender = Array.from(Array(5), _ => Array(7).fill(0));
    for (var row = 0; row < 5; row++) {
        for (var col = 0; col < 7; col++) {
            if (daysInMonth[daysIndex]) {
                var index = daysInMonth[daysIndex].day
                calender[row][index] = daysInMonth[daysIndex].date
                daysIndex += 1
                if (index >= 6) {
                    break
                }
            }

        }
    }
    return calender
}