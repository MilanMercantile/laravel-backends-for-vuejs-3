
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
    useRouter().push("/me");
  }
  catch (err)
  {
    console.log(err);
  }
}

</script>
<template>
  <v-card class="align-center justify-center h-100">
    <v-form
        @submit.prevent="handleLogin"
    >
      <v-text-field
          v-model="userCredentials.email"
          class="mb-2"
          label="Email"
          bg-color="white"
          variant="outlined"
      ></v-text-field>

      <v-text-field
          v-model="userCredentials.password"
          label="Password"
          placeholder="Enter your password"
          bg-color="white"
          type="password"
      ></v-text-field>

      <br>

      <v-btn
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>




<!--  <div>-->
<!--    <form>-->
<!--      &lt;!&ndash;      <v-text-field&ndash;&gt;-->
<!--      &lt;!&ndash;          label="E-mail"&ndash;&gt;-->
<!--      &lt;!&ndash;          required&ndash;&gt;-->
<!--      &lt;!&ndash;      ></v-text-field>&ndash;&gt;-->

<!--      <v-text-field-->
<!--          v-model="userCredentials.email"-->
<!--          density="compact"-->
<!--          label="E-mail"-->
<!--          hide-details="auto"-->
<!--          placeholder="johndoe@gmail.com"-->
<!--          type="email"-->
<!--      ></v-text-field>-->

<!--      <v-text-field-->
<!--          v-model="userCredentials.password"-->
<!--          density="compact"-->
<!--          label="Password"-->
<!--          variant="solo-filled"-->
<!--          type="password"-->
<!--      ></v-text-field>-->

<!--      &lt;!&ndash;      <v-text-field&ndash;&gt;-->
<!--      &lt;!&ndash;          v-model="userCredentials.password"&ndash;&gt;-->
<!--      &lt;!&ndash;          label="Password"&ndash;&gt;-->
<!--      &lt;!&ndash;          required&ndash;&gt;-->
<!--      &lt;!&ndash;          type="password"&ndash;&gt;-->
<!--      &lt;!&ndash;      ></v-text-field>&ndash;&gt;-->

<!--      <v-btn-->
<!--          class="me-4"-->
<!--          @click="handleLogin()"-->
<!--      >-->
<!--        submit-->
<!--      </v-btn>-->
<!--    </form>-->
<!--  </div>-->

</template>


