<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div
      class="p-5 rounded w-96 bg-white shadow border-t-[8px] border-gray-800"
    >
      <slot></slot>
    </div>
  </div>

  <template>
    <div>
      <v-layout class="rounded rounded-md">
        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar title="Application bar"></v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
          <slot></slot>
        </v-main>
      </v-layout>
    </div>
  </template>

</template>
