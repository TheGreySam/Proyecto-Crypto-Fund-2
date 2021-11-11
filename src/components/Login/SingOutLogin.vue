<template>
    <div>
         <v-btn class="btn-out" @click="handleLogout" text text-shadow depressed white--text>
            <div class="hidden-md-and-down">{{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}</div>
            <v-icon right>mdi-logout</v-icon>
        </v-btn>
      
    </div>
   
</template>

<script>
export default {
    name: 'Singoutlogin',

    methods: {
      async handleLogout() {
      await this.$store.dispatch("unlogCurrentUser");
      this.$router.push('/');
    },
    },
};
</script>

<style lang="scss" scoped>
.btn-out{
    color: #fff;
}
.text-shadow {
  text-shadow: 0px 3px #000000;
}
</style>