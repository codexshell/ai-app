<script setup lang="ts">
import logoUrl from "@/assets/images/logo.svg";
import blankPhoneUrl from "@/assets/images/blank-phone.png";
import appleIconUrl from "@/assets/images/apple-icon.svg";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const handleGenerate = (event) => {
  if (event.target.form.checkValidity()) {
    userStore.getRandomPhoto();
  }
};
</script>

<template>
  <main class="min-h-screen">
    <div class="grid grid-cols-2 place-content-center">
      <div class="col-span-1 grid h-[1024px] place-content-center">
        <span><img :src="logoUrl" alt="" /></span>
        <h1
          class="mt-16 font-brand-1 text-[24px] leading-[30px] tracking-[-0.16em]"
        >
          <span class="font-extrabold">Max - AI Fitness</span> is live on
          Dreamshow
        </h1>
        <button
          class="mt-8 flex h-[52px] w-[380px] items-center justify-center gap-4 rounded-[20px] bg-brand-white backdrop-blur-[40px]"
        >
          <span>
            <img :src="appleIconUrl" alt="" />
          </span>
          <span
            class="font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-black"
            >Download on iOS</span
          >
        </button>

        <label
          for="tel"
          class="mt-6 font-brand-1 text-[24px] font-semibold leading-[30px] tracking-[-0.16em] text-white"
          >Launch on SMS</label
        >
        <input
          type="tel"
          id="tel"
          placeholder="+1 (473) 444 5789"
          class="mt-6 h-[52px] w-[380px] rounded-[20px] border-2 border-brand-blue bg-transparent text-center font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-white backdrop-blur-[40px] placeholder:text-brand-white"
        />
        <button
          class="mt-5 h-[52px] w-[380px] rounded-[20px] bg-brand-blue font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-white backdrop-blur-[40px]"
        >
          $50/mo
        </button>
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
          <span
            class="absolute top-52 left-20 h-[40px] w-[320px] rounded-[20px] bg-brand-white p-[10px] font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-green"
            >So what should I work on today?</span
          >
          <span
            class="absolute top-[265px] left-16 h-[60px] w-[297px] rounded-[20px] bg-brand-gray-2 p-[10px] font-brand-1 font-semibold leading-[20px] tracking-[-0.16em] text-brand-white"
            >Today is Monday, and you gotta know the drill.
          </span>
          <span
            class="absolute top-[776px] left-14 h-[44px] w-[348px] rounded-[22px] border border-solid border-brand-white px-6 py-2 font-brand-1 font-light leading-[20px] tracking-[-0.16em] text-brand-white"
            >So what should I work on?</span
          >
        </span>
      </div>
    </div>
  </main>
</template>
