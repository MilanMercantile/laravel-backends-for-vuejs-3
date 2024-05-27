
<script setup lang="ts">

definePageMeta({
  // layout: "auth",
  middleware: ["guest"]
});

const { login } = useSanctumAuth();

const userCredentials = {
  email: "",
  password: "",
};
async function handleLogin() {
  try
  {
    await login(userCredentials);
    useRouter().replace("/me");
  }
  catch (err)
  {
    console.log(err);
  }
}

</script>
<template>
    <form>
      <v-text-field
          v-model="userCredentials.email"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="userCredentials.password"
          label="Password"
          required
          type="password"
      ></v-text-field>
      <v-btn
          class="me-4"
          @click="handleLogin()"
      >
        submit
      </v-btn>
    </form>
  </template>


