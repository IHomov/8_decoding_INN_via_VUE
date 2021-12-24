const signs = [
    { name: 'козерог', m: 1, d: 20 },
    { name: 'водолей', m: 2, d: 20 },
    { name: 'рыбы', m: 3, d: 20 },
    { name: 'овен', m: 4, d: 20 },
    { name: 'телец', m: 5, d: 20 },
    { name: 'близнецы', m: 6, d: 21 },
    { name: 'рак', m: 7, d: 22 },
    { name: 'лев', m: 8, d: 23 },
    { name: 'дева', m: 9, d: 23 },
    { name: 'весы', m: 10, d: 23 },
    { name: 'скорпион', m: 11, d: 22 },
    { name: 'стрелец', m: 12, d: 21 },
    { name: 'козерог', m: 13, d: 20 }
];




function checkInn(indata) {
    let hash = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
    let sum = 0;
    // let result = {};
    for (let i = 0; i < (indata.length - 1); ++i) {
        sum += indata[i] * hash[i];
    }
    let k = sum - (11 * (Math.floor(sum / 11)));
    if (k >= 10) {
        k = 0;
    }

    if (k != indata[9]) {
        return false;
    }
    else {
        return true;
    }

}

function birthday(count) {
    // birthday as the number of days that have elapsed since 01 / 01 / 1900
    let date;
    let countDays = +count.substring(0, 5);
    date = (new Date(1900, 0, 0));
    date.setDate(date.getDate() + (countDays));
    let dateOfBirth = new Date(date);
    let finishBD = dateOfBirth.getDate() + '.' + (dateOfBirth.getMonth() + 1) + '.' + dateOfBirth.getFullYear();
    return finishBD;
}

function calcSign() {

    let d = date.getDate();
    let m = date.getMonth() + 1;
    let znakG = '';

    if (signs[m - 1].d <= d) {
        znakG = signs[m].name;
    } else znakG = signs[m - 1].name;

    return `Знак по гороскопу: ${znakG}`;
}


function gender(datagender) {
    let gender;
    let numberGen = +datagender.substring(8, 9);
    if (numberGen % 2 != 0) {
        gender = 'Male';
    } else {
        gender = 'Female';
    }
    return gender;
}

function getAge(input) {
    let now = new Date(); //Текущя дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(input); //Дата рождения   
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст
    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
        age = age - 1;
    }
    return age;
}

function get_zoo() {
    let zoo = "";
    let bth_year = date.getFullYear();
    let year = Number(bth_year) % 12;

    switch (year) {
        case 0: zoo = "обезьяна"; break;
        case 1: zoo = "петух"; break;
        case 2: zoo = "собака"; break;
        case 3: zoo = "свинья"; break;
        case 4: zoo = "мышь"; break;
        case 5: zoo = "бык"; break;
        case 6: zoo = "тигр"; break;
        case 7: zoo = "кролик"; break;
        case 8: zoo = "дракон"; break;
        case 9: zoo = "змея"; break;
        case 10: zoo = "лошадь"; break;
        case 11: zoo = "коза"; break;
    }
    return zoo;
}



