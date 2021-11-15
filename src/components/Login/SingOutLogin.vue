<template>
    <div>
         <v-btn class="btn-out" @click="handleLogout" text text-shadow depressed white--text>
            {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}
            <v-icon right>mdi-logout</v-icon>
        </v-btn>
      
    </div>
   
</template>

<script>
export default {
    name: 'Singoutlogin',
    methods: {
      async handleLogout() {
      await this.$store.dispatch("signOut");
      this.$router.push('/');
    },
    },
};
</script>

<style lang="scss" scoped>
.btn-out{
    color: #fff;
    font-size: 12px;
}
.text-shadow {
  text-shadow: 0px 3px #000000;
}
</style>