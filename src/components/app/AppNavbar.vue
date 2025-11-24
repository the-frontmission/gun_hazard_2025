<script setup lang="ts">
import  { routes } from '../../router/index';
</script>

<template>
  <nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link class="navbar-brand" to="/">GunHazard</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-nav-scroll">
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
    </div>
  </nav>
</template>
