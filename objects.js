let person = {
    name: "John",
    age: 24,
    sayHello() {
        return `Hi, I'm ${this.name}`
    }
}

person.favSongs = ["jhus", "stormzy"]

console.log(person)

// console.log( person.name )

// console.log( person["name"])



// let day = "Saturday"
// let alarmMsg = ""

// let alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// if (day === "Saturday" || day === "Sunday") {
//     alarmMsg = alarm.weekendAlarm
// } else {
//     alarmMsg = alarm.weekdayAlarm
// }
// console.log(alarmMsg)