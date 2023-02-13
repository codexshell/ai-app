<script setup lang="ts">
import { RouterLink } from "vue-router";
import logoUrl from "@/assets/images/logo.svg";
import videoUrl from "@/assets/videos/finaldemo.mp4";
import { ref, onMounted } from "vue";

const video = ref<HTMLVideoElement | null>(null);

onMounted(() => console.log(video!.value!.play()));
</script>

<template>
  <div class="pb-32">
    <span class="mt-[48px] mr-[40px] flex gap-4">
      <span><img :src="logoUrl" alt="" /></span>
      <span
        class="font-brand-1 text-[20px] font-bold leading-[25px] tracking-[-0.16em]"
        >Dreamshow</span
      >
    </span>
    <header class="mt-20">
      <h1
        class="mx-auto w-[618px] text-center font-brand-2 text-[48px] font-bold leading-[64px]"
      >
        Create your own AI apps <span class="text-brand-blue">in minutes.</span>
      </h1>
      <p
        class="mx-auto mt-8 text-center font-brand-2 text-[24px] font-medium leading-[36px]"
      >
        With Dreamshow, you can turn your knowledge into a<br />
        an AI app in minutes. Bring your ideas to life today.
      </p>
    </header>
    <main>
      <router-link :to="{ name: 'experience' }">
        <button
          class="mx-auto mt-6 block h-[52px] w-[200px] rounded-[16px] bg-brand-blue text-center font-brand-2 font-bold leading-[36px] text-brand-white"
        >
          early access
        </button>
      </router-link>

      <video
        ref="video"
        width="1000"
        autoplay
        loop
        :src="videoUrl"
        class="mx-auto mt-16"
      ></video>
    </main>
  </div>
</template>
