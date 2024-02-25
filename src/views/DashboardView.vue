<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Menu />
        <div class="col py-3">
          <Nav />
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '@/views/dashboard/components/Menu.vue'
import Nav from '@/views/dashboard/components/Nav.vue'
</script>