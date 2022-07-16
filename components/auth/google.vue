<script>
    import firebase from 'firebase'
    
    export default {
        methods: {
            googleSignIn () {
                const provider = new firebase.auth.GoogleAuthProvider()
                const user = {}
                firebase.auth().signInWithPopup(provider)
                .then(result => {
                    const data    = result.additionalUserInfo.profile
                    user.name     = data.name
                    user.email    = data.email
                    user.password = data.id
                    user.avatar   = data.picture
                    user.provider = 'google'
                    return this.$axios.post('/api/auth/social', user)
                })
                .then(() => this.$auth.loginWith('cookie', { data: user }))
                .catch(e => {
                    console.log(e)
                })
            }
        }
    }
</script>

<template>
    <div class="social-login" @click="googleSignIn">
        <!-- <img style="height: 1.5rem; width: auto"
            src="../../assets/icon/social/google.png" alt="google-sign"
        > -->
    </div>
</template>

<style scoped>
    .social-login {
        cursor: pointer;
        padding: 10px;
        box-shadow: 0px 5px 10px rgba(0, 19, 159, 0.06);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        transition: 0.2s;
    }
	
    .social-login:hover {
        box-shadow: 0px 5px 10px rgba(0, 19, 159, 0.12);
    }
</style>