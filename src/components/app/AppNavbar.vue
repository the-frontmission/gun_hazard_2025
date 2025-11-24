<script setup lang="ts">
import  { routes } from '../../router/index';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">GunHazard</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(route, index) in routes" :key="index">
            <router-link
              class="nav-link text-capitalize"
              active-class="active"
              :to="route.path"
            >{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>