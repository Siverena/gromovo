export default {
  methods: {
    getEnding(number) {
      const tmp = '' + number;
      const arrTmp = tmp.split('');
      const num = arrTmp[arrTmp.length - 1];
      if (number > 4 && number < 20) {
        return 'ночей';
      } else if (num === '1') {
        return 'ночь';
      } else if (num >= '2' && num <= '4') {
        return 'ночи';
      } else {
        return 'ночей';
      }
    },
    getEndingGuests(number) {
      const tmp = '' + number;
      const arrTmp = tmp.split('');
      const num = arrTmp[arrTmp.length - 1];
      if (number > 4 && number < 20) {
        return 'гостей';
      } else if (num === '1') {
        return 'гость';
      } else if (num >= '2' && num <= '4') {
        return 'гостя';
      } else {
        return 'гостей';
      }
    },
    getEndingChildren(number) {
      const tmp = '' + number;
      const arrTmp = tmp.split('');
      const num = arrTmp[arrTmp.length - 1];
      if (number > 4 && number < 20) {
        return 'детей';
      } else if (num === '1') {
        return 'ребенок';
      } else if (num >= '2' && num <= '4') {
        return 'ребенка';
      } else {
        return 'детей';
      }
    },
    getEndingPlace(number) {
      const tmp = '' + number;
      const arrTmp = tmp.split('');
      const num = arrTmp[arrTmp.length - 1];
      if (number > 4 && number < 20) {
        return 'мест';
      } else if (num === '1') {
        return 'место';
      } else if (num >= '2' && num <= '4') {
        return 'места';
      } else {
        return 'мест';
      }
    },
  },
};
