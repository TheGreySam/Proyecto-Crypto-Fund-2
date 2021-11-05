<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Open Dialog
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 white--text ml-5">Inicia Sesión</h3>
            </v-col>
            <v-col cols="2">
              <v-btn icon @click="resetModal">
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
                    :rules="emailRules"
                    outlined
                    color="cfgray"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    v-model="password"
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
                      Registrate aquí</a
                    >
                  </p>
                </v-form>
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
    buttonLogin() {
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
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Correo o contraseña incorrectos ",
          });
        });
    },
    resetModal() {
      this.$refs.form.resetValidation();
      this.$refs.form.reset();
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
