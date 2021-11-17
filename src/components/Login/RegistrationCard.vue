<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          depressed
          x-large
          class="white--text hero-btn"
        >
          Regístrate
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 ml-5 white--text text-center">Regístrate</h3>
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
                    label="Nombre y Apellido"
                    v-model="fullName"
                    :rules="[required]"
                    color="cfgray"
                    outlined
                  ></v-text-field>

                  <v-select
                    :items="[
                      { text: 'Premium', value: 'admin' },
                      { text: 'Básica', value: 'user' },
                    ]"
                    label="Selecciona tu suscripción"
                    v-model="rol"
                    :rules="[required]"
                    color="cfgray"
                    outlined
                  ></v-select>
                  <v-text-field
                    label="Correo Electrónico"
                    v-model="email"
                    :rules="emailRules"
                    outlined
                    color="cfgray"
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[required, passwordConfirmationRule]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    color="cfgray"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-text-field
                    label="Confirma la contraseña"
                    v-model="confirmPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[required, passwordConfirmationRule]"
                    :type="show1 ? 'text' : 'password'"
                    outlined
                    color="cfgray"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-btn
                    block
                    outlined
                    color="cforange"
                    @click="buttonRegistration"
                  >
                    Registrarse
                  </v-btn>
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
    fullName: "",
    rol: "",
    email: "",
    password: "",
    confirmPassword: "",
    show1: false,
    email: "",
    emailRules: [
      (v) => !!v || "Ingresa un correo correcto",
      (v) => /.+@.+\..+/.test(v) || "El correo ingresado no es valido",
    ],
  }),

  methods: {
    buttonRegistration() {
      if (this.$refs.form.validate()) {
        Firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.$store.dispatch("defineCurrentUser", {
              email: response.user.email,
            });
            Firebase.firestore().collection("usuarios").add({
              email: this.email,
              fullName: this.fullName,
              rol: this.rol,
            });
            this.$store.dispatch("subscribeToAuthStateChange");
            this.dialog = false;
            this.$router.push("/fondo");
          })
          .catch((error) => {
            console.error(error);
            this.$swal("Upss, ha ocurrido un error");
          });
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    resetForm() {
      this.dialog = false;
      this.$refs.form.reset();
    },
  },
  computed: {
    passwordConfirmationRule() {
      return (
        this.password === this.confirmPassword ||
        "Las contraseñas son distintas"
      );
    },
  },
};
</script>

<style>
.hero-btn {
  margin-top: 20px;
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #fa7921);
  background: linear-gradient(to bottom right, #464b96, #fa7921);
  font-size: 12px !important;
}
</style>
