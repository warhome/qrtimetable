# qrtimetable
A simple cross-platform moblie class schedule app for students with in-app builder.
Built in react-native.

## Features
- In-app shedule builder (🗙 available soon)
- Authorization and data storage in Firebase, as well as in local storage (🗙 available soon)
- Displaying information about week modifier, highlighting the current lesson (✓)
- Loading a schedule in a special json format (✓)
- Dark mode :sunglasses: (✓)

## Json example
  "id": 123456,
  "madeBy": "admin",
  "lessons": {
    "Понедельник": [],
    "Вторник": [
      {
        "name": "Проектирование баз данных",
        "teacher": "Матвеев М.В.",
        "room": "Л4",
        "time": "13:25-15:00",
        "weekModificator": "odd"
      },
      {
        "name": "МиСПИС",
        "teacher": "Власов С.В.",
        "room": "Л2",
        "time": "15:10-16:45",
        "weekModificator": "any"
      },
    ],
    "Среда": [
      {
        "name": "Физвоспитание",
        "teacher": "-",
        "room": ["-", "-"],
        "time": "8:00-9:35",
        "weekModificator": "any"
      },
      {
        "name": "Теория информации",
        "teacher": "Борисов Д.Н.",
        "room": "479",
        "time": "9:45-11:20",
        "weekModificator": "any"
      },
    ],
    "Четверг": [
      {
        "name": "Информационные технологии",
        "teacher": "Черменев Д.А.",
        "room": "292",
        "time": "9:45-11:20",
        "weekModificator": "odd"
      },
    ],
    "Пятница": [
      {
        "name": "Физвоспитание",
        "teacher": "-",
        "room": ["-", "-"],
        "time": "8:00-9:35",
        "weekModificator": "any"
      },
    ]
  }
}

## How to install
You can always find the latest apk build for android <a href="https://github.com/warhome/qrtimetable/raw/master/android/app/build/outputs/apk/release/app-release.apk">from this link</a>

not currently available on ios :cry:
