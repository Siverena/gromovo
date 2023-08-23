export default {
  computed: {
    showBookingForm() {
      if (
        !this.getCottage?.id ||
        !this.getBookingInformation ||
        this.getBookingInformation.dateStart === null
      ) {
        return false;
      }
      return true;
    },
  },
};
