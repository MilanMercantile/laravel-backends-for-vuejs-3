<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer
        v-bind:width="400"
        name="drawer"
        permanent
    >
      <div class="justify-center align-center h-100">
        <slot></slot>
      </div>
    </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
     <AuthSlogan></AuthSlogan>
    </v-main>
  </v-layout>
</template>
