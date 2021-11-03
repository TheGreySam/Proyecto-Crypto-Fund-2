<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <p class="text-center pt-5">
          No tienes cuenta?
          <v-btn text depressed v-bind="attrs" v-on="on">
            Registrate
          </v-btn>
          </p>
      </template>
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 white--text">Registrate</h3>
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
                <v-text-field
                  label="Confirma la contraseña"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules.confirmRequired"
                  :type="show1 ? 'text' : 'password'"
                  outlined
                  modal="confirmPassword"
                  color="cfgray"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>
                <v-btn block outlined color="cforange" @click="buttonRegistration">
                  Registrarse
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
    confirmPassword: "",
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
    buttonRegistration() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch('defineCurrentUser', {
            email: response.user.email
          })
          this.$router.push('/fondo')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
};
</script>

<style></style>
