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
          <p>Hi {{ user.name }}</p>
          <v-btn @click="logout_user()"> Logout </v-btn>
        </v-main>
      </v-layout>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { user ,logout} = useSanctumAuth();

function logout_user()
{
  logout();
  useRouter().replace("/login");
  // user.value = null;
}



</script>
