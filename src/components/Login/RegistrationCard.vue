<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Registrate
        </v-btn>
      </template>
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 white--text">Registrate</h3>
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
                    :rules="[passwordRules.required]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    modal="password"
                    color="cfgray"
                    @click:append="show1 = !show1"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Confirma la contraseña"
                    v-model="confirmPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordRules.required, passwordConfirmationRule]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    color="cfgray"
                    @click:append="show1 = !show1"
                    required
                  ></v-text-field>
                  <v-btn
                    block
                    outlined
                    color="cforange"
                    :disabled="(this.password === this.confirmPassword)  ? disabled : true"
                    @click="buttonRegistration"
                  >
                    Registrarse
                  </v-btn>
                  <p class="text-center pt-5">
                    Tienes cuenta?<a href="#" class="cforange--text link">
                      Inicia Sesión aquí</a
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
    components:{
        LoginCard: () => import("../Login/LoginCard.vue"),

    },
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
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
          this.$router.push("/fondo");
          this.dialog = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    resetModal() {
      this.$refs.form.resetValidation()
      this.$refs.form.reset()
      this.dialog = false
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.confirmPassword)  || 'Las contraseñas son distintas'
    }
}
};
</script>

<style></style>
