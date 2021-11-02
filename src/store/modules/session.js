import Firebase from "firebase";

export const sessionModule = {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        isAdmin(state) {
            return state.user.rol === "admin";
        },
        isUser(state) {
            return state.user.rol === "user"
        }

    },
    mutation: {
        SET_USER(state, newUser) {
            state.user = newUser;
        },
    },
    actions: {
        subscribeToAuthStateChange(context) {
            Firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    const user = await Firebase.firestore().collection("usuarios").get().then((documents) => {
                        documents.forEach((document) => {
                            const data = document.data();
                            if (data.email === user.email) {
                                console.log(data.rol)
                                newUser.rol = data.rol;
                            }
                        });
                        context.commit("SET_USER", { email: user.email } || null);
                    });
                    
                } else {
                    context.commit("SET_USER", { email: user.email } || null);
                }
                context.commit("SET_USER", null);
            });
        },
        async signIn(_context, credentials) {
            await Firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            );
        },
        async signOut() {
            await Firebase.auth().signOut();
        },
    }
}