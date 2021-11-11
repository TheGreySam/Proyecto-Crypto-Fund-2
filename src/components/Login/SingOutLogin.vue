<template>
    <div>
         <v-btn class="btn-out" @click="handleLogout" text depressed white--text>
            {{ $store.state.currentUser ? $store.state.currentUser.email : "No existe" }}
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
</style>