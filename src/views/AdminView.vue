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
import Menu from '@/views/admin/components/Menu.vue'
import Nav from '@/views/admin/components/Nav.vue'
</script>