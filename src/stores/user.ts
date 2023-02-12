import { defineStore } from "pinia";
import { randomPhoto } from "@/apis/randomPhoto";

export const useUserStore = defineStore("UserStore", {
  // Data
  state: () => ({
    name: "",
    imageDescription: "",
    randomImageUrl: "",
    showAlternateInformation: false,
    allowUpload: false,
    removeLastMsg: false,
    showFirstMsg: false,
    showSecondMsg: false,
    showThirdMsg: false,
  }),

  // Computed
  getters: {},

  // Methods
  actions: {
    async getRandomPhoto() {
      const result = await randomPhoto();
      const response = result.url;
      this.randomImageUrl = response;
      this.showAlternateInformation = true;
      this.allowUpload = true;
    },
  },
});
