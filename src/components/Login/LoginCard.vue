<template>
  <v-row>
   <v-btn text depressed
      class="btn-session"
      @click.stop="dialog = true"
    >
      Inicia sesión
          <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark :v-bind="attrs" v-on="on">
          Inicia Sesión
        </v-btn>
      </template> -->
      <v-card>
        <v-toolbar class="cforange" light>
          <v-row>
            <v-col cols="10">
              <h3 class="pt-3 pl-5 white--text text-center">Inicia Sesión</h3>
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
                    Registrate aquí</a
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
    buttonLogin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
           this.$router.push('/fondo')
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
.btn-session{
  border-radius: 0;
  color: #fff;
  background: -prefix-linear-gradient(left top, #464b96, #FA7921);
  background: linear-gradient(to bottom right, #464b96, #FA7921);
  font-size: 12px;
   margin-left: 20px;
}
</style>
