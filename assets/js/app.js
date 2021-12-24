
import { createApp } from '../../node_modules/vue/dist/vue.esm-browser.js';

const appConfig = {
    data() {
        return {
            title: "Расшифровка ИНН (идентификационного номера) Украина",
            inputData: "",
            signs: [
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
            ],
            len: '10',
        }
    },

    computed: {
        Correct: function () {
            let hash = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
            let sum = 0;
            for (let i = 0; i < (this.inputData.length - 1); ++i) {
                sum += this.inputData[i] * hash[i];
            }
            let k = sum - (11 * (Math.floor(sum / 11)));
            if (k >= 10) {
                k = 0;
            }

            if (k != this.inputData[9]) {
                return false;
            }
            else {
                return true;
            }

        },

        birthday: function () {
            if (!this.Correct) {
                return '';
            }
            let date;
            let countDays = +this.inputData.substring(0, 5);
            date = (new Date(1900, 0, 0));
            date.setDate(date.getDate() + (countDays));
            let dateOfBirth = new Date(date);
            let finishBD = dateOfBirth.getDate() + '.' + (dateOfBirth.getMonth() + 1) + '.' + dateOfBirth.getFullYear();

            return finishBD;
        },

        Zodiac: function () {
            if (!this.Correct) {
                return '';
            }
            let str = this.birthday;
            let words = str.split('.');
            let day = +words[0];
            let month = +words[1];
            let znakG = '';
            console.log(this.signs[month]);
            if (this.signs[month].d <= day) {
                znakG = this.signs[month].name;
            } else znakG = this.signs[month - 1].name;

            return znakG;

        },
        age: function () {
            if (!this.Correct) {
                return '';
            }
            let str = this.birthday;
            let words = str.split('.');
            let day = +words[0];
            let month = +words[1];
            let year = +words[2];
            let now = new Date(); //Текущя дата
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени

            let dobnow = new Date(today.getFullYear(), month, day); //ДР в текущем году
            let age; //Возраст
            //Возраст = текущий год - год рождения
            age = today.getFullYear() - year;
            //Если ДР в этом году ещё предстоит, то вычитаем из age один год
            if (today < dobnow) {
                age = age - 1;
            }
            return age;

        },
        gender: function () {
            if (!this.Correct) {
                return '';
            }
            let gender;
            let numberGen = this.inputData.substring(8, 9);
            if (numberGen % 2 != 0) {
                gender = 'Мужской';
            } else {
                gender = 'Женский';
            }
            return gender;
        },

        chinaCalendar: function () {
            if (!this.Correct) {
                return '';
            }
            let zoo = "";
            let str = this.birthday;
            let words = str.split('.');
            let bth_year = +words[2];
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
    }
}

createApp(appConfig).mount('#app');



