<script setup lang="ts">
import videojs from "video.js";
import dashjs from 'dashjs'
import {onBeforeUnmount, onMounted, ref} from "#imports";

const player = ref<videojs.Player | null>(null)

const playVideo = () => {
  if (player.value) {
    player.value.play()
  }
}

const setupVideo = () => {
  player.value = videojs('example-video')
  player.value.ready(() => {
    console.log('onMounted:ready')
    player.value.src({
      src: 'https://cloudflarestream.com/7c2ede07a44d79b00831a22b144e65bc/manifest/video.mpd',
      type: 'application/dash+xml'
    })
  })
}

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  player.value?.dispose()
})
</script>
<template>
  <div>
    <video id="example-video" />
    <button @click="setupVideo">setupVideo</button>
    <button @click="playVideo">playVideo</button>
  </div>
</template>
