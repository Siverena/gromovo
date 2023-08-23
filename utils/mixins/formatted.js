export default {
  methods: {
    formattedPrice(string) {
      if (!isFinite(string)) {
        return string;
      } else {
        return `${new Intl.NumberFormat('ru-RU').format(string)} Ꝑ`;
      }
    },
  },
};
