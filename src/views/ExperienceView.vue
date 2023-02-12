<script setup lang="ts">
import logoUrl from "@/assets/images/logo.svg";
import blankPhoneUrl from "@/assets/images/blank-phone.png";
import closeIconUrl from "@/assets/images/close-icon.svg";

import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const handleGenerate = (event: any) => {
  if (event.target.form.checkValidity()) {
    userStore.getRandomPhoto();
  }
};

const handleUpload = (event: any) => {
  if (event.target.form.checkValidity()) {
    userStore.allowUpload = true;
  }
};

const handleClose = () => {
  userStore.allowUpload = false;
};

const goToLivePage = (event: any) => {
  if (event.target.form.checkValidity()) {
    router.push({ name: "live" });
  }
};
</script>

<template>
  <main class="min-h-screen">
    <div class="grid grid-cols-2 place-content-center">
      <div class="col-span-1 grid h-[1024px] place-content-center">
        <span><img :src="logoUrl" alt="" class="mt-[146]" /></span>
        <h1
          class="mt-16 font-brand-1 text-[24px] leading-[30px] tracking-[-0.16em]"
        >
          Let's create your AI app experience
        </h1>

        <form v-on:submit.prevent="">
          <label
            for="name"
            class="mt-8 block font-brand-1 text-[20px] font-light tracking-[-0.16em] text-brand-gray"
            >Name</label
          >
          <input
            type="text"
            placeholder="Enter Name"
            required
            v-model="userStore.name"
            id="name"
            class="mt-4 h-[52px] w-[380px] rounded-[20px] bg-brand-button-gray text-center font-brand-1 leading-[20px] tracking-[-0.16em] text-brand-white backdrop-blur-[40px] placeholder:text-brand-white"
          />

          <label
            for="image"
            class="mt-8 block font-brand-1 text-[20px] font-light tracking-[-0.16em] text-brand-gray"
            >Image</label
          >
          <div class="relative">
            <input
              v-model="userStore.imageDescription"
              type="text"
              placeholder="Enter Image"
              required
              id="image"
              class="mt-4 h-[52px] w-[380px] rounded-[20px] bg-brand-button-gray pl-10 font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-white backdrop-blur-[40px] placeholder:text-brand-white"
            />
            <button
              v-on:click="handleGenerate"
              class="absolute top-6 left-72 h-[36px] w-[80px] rounded-[12px] bg-brand-button-gray font-brand-1 text-[12px] leading-[15px] tracking-[-0.16em] text-brand-white"
            >
              Generate
            </button>
          </div>

          <label
            for="upload-data"
            class="mt-8 block h-[25px] font-brand-1 text-[20px] font-light leading-[25px] tracking-[-0.16em] text-brand-gray"
            >Upload Your Data</label
          >
          <Transition name="bounce">
            <button
              v-if="!userStore.allowUpload"
              v-on:click="handleUpload"
              class="backdrop-filter-[20px] mt-4 h-[52px] w-[380px] rounded-[20px] bg-brand-white text-center font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-black"
            >
              Upload
            </button>
          </Transition>
          <Transition name="delay">
            <div class="relative" v-if="userStore.allowUpload">
              <input
                type="file"
                required
                id="upload-data"
                class="mt-4 w-[380px] rounded-[20px] bg-brand-button-gray py-4 pl-6 backdrop-blur-[40px]"
              />
              <button
                class="absolute top-9 left-[340px]"
                v-on:click="handleClose"
              >
                <img :src="closeIconUrl" alt="" />
              </button>
            </div>
          </Transition>
          <button
            class="mt-8 block h-[52px] w-[380px] rounded-[20px] bg-brand-blue font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-white backdrop-blur-[40px]"
            v-on:click="goToLivePage"
          >
            Build
          </button>
        </form>
      </div>

      <div
        class="col-span-1 flex items-center justify-center bg-brand-main bg-cover bg-no-repeat"
      >
        <span class="relative">
          <img
            :src="blankPhoneUrl"
            alt=""
            class="mx-auto h-[925px] w-[460px]"
          />
          <img
            v-if="userStore.showAlternateInformation"
            :src="userStore.randomImageUrl"
            alt=""
            class="absolute top-[115px] left-[60px] h-[58px] w-[62px] rounded-full"
          />
          <span
            class="absolute top-[118px] left-[150px] font-brand-1 text-[18px] font-medium leading-[22px] tracking-[-0.16em] text-brand-white"
            >{{ userStore.name }}</span
          >
          <span
            v-if="userStore.showAlternateInformation"
            class="absolute top-[144px] left-[150px] font-brand-1 text-sm font-medium leading-[22px] tracking-[-0.16em] text-brand-gray"
            >{{ userStore.imageDescription }}</span
          >
        </span>
      </div>
    </div>
  </main>
</template>

<style>
.bounce-leave-active {
  animation: bounce-out 0.5s ease-out;
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
    transform: 1;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.delay-enter-active {
  animation: delay-before 1.25s;
}

@keyframes delay-before {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
