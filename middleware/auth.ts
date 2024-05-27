export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated } = useSanctumAuth();
  if (!isAuthenticated.value)
  {
    return navigateTo("/login");
  }
});
