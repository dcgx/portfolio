<template>
  <aside class="fixed left-0 items-center hidden h-screen pl-10 pr-5 lg:flex">
    <nav class="flex flex-col gap-10 pt-40">
      <a href="https://github.com/dcgx" target="__blank" class="cursor-pointer">
        <Icon
          icon="akar-icons:instagram-fill"
          color="white"
          width="40"
          height="40"
        />
      </a>
      <a>
        <Icon
          icon="akar-icons:linkedin-box-fill"
          color="white"
          width="40"
          height="40"
        />
      </a>
      <a>
        <Icon
          icon="akar-icons:github-fill"
          color="white"
          width="40"
          height="40"
        />
      </a>
    </nav>
  </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
