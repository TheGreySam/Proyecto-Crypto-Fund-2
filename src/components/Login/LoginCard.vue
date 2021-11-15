<template>
  <v-row>
    <v-btn text depressed class="btn-session" @click.stop="dialog = true">
      Inicia sesión
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-toolbar prominent light src="@/assets/bitcoin-img.jpeg">
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 ml-5 white--text text-center">
                Inicia Sesión
              </h3>
            </v-col>
            <v-col cols="2">
              <v-btn icon @click="resetForm">
                <v-icon class="white--text">mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
        <v-card-text class="pt-3">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="Correo Electrónico"
                    v-model="email"
                    :rules="[required]"
                    outlined
                    color="cfgray"
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[required]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    color="cfgray"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
                <v-btn block outlined color="cfdarkblue" @click="buttonLogin">
                  Entrar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    dialog: false,
    valid: true,
    password: "",
    show1: false,
    email: "",
  }),

  methods: {
    buttonLogin() {
      if (this.$refs.form.validate()) {
        Firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.$store.dispatch("defineCurrentUser", {
              email: response.user.email,
            });
            this.$router.push("/fondo");
            this.dialog = false;
          })
          .catch(() => {
            this.$swal("Upss, correo o contraseña incorrectos");
          });
      }
    },
    resetForm() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
.btn-session {
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #fa7921);
  background: linear-gradient(to bottom right, #464b96, #fa7921);
  font-size: 12px;
  margin-left: 20px;
}
</style>
