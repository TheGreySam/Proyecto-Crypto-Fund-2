<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Inicia Sesión
        </v-btn>
      </template>
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 white--text">Inicia Sesión</h3>
            </v-col>
            <v-col cols="2">
              <v-btn icon @click="dialog = false">
                <v-icon class="white--text">mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
        <v-card-text class="pt-3">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Correo Electrónico"
                  v-model="email"
                  :rules="emailRules"
                  outlined
                  color="cfgray"
                  required
                ></v-text-field>
                <v-text-field
                  label="Contraseña"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules.required"
                  :type="show1 ? 'text' : 'password'"
                  outlined
                  modal="password"
                  color="cfgray"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
                <v-btn block outlined color="cforange" @click="buttonLogin">
                  Entrar
                </v-btn>
                <p class="text-center pt-5">
                  No tienes cuenta?<a href="#" class="cforange--text link">
                    Regristrate aquí</a
                  >
                </p>
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
    passwordRules: {
      required: (v) => !!v || "Ingresa una contraseña correcta",
    },
    email: "",
    emailRules: [
      (v) => !!v || "Ingresa un correo correcto",
      (v) => /.+@.+\..+/.test(v) || "El correo ingresado no es valido",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    buttonLogin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
        })
        .catch(() => {
          this.$swal("Upss, correo o contraseña incorrectos");
        });
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
