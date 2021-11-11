<template>
    <div>
         <v-btn class="btn-out" @click="handleLogout" text depressed white--text>
            {{ $store.state.session.currentUser ? $store.state.session.currentUser.email : "No existe" }}
            <v-icon right>mdi-logout</v-icon>
        </v-btn>
      
    </div>
   
</template>

<script>
export default {
    name: 'Singoutlogin',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
      async handleLogout() {
      await this.$store.dispatch("session/unlogCurrentUser");
      this.$router.push('/');
    },
    },
};
</script>

<style lang="scss" scoped>
.btn-out{
    color: #fff;
}
</style>