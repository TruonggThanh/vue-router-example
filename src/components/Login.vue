<template>
    <div class="login">
        <h1>LOGIN</h1>
        <span>Username</span>
        <input type="text" name="username" placeholder="Username" v-model="input.username"/>
        <br/>
        <br/>
        <span>Password</span>
        <input type="password" name="password" placeholder="Password" v-model="input.password"/>
        <br/>
        <br/>
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            if (this.input.username != '' && this.input.password) {
                if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit('authenticated', true)
                    this.$router.replace({ name: 'cms' })
                } else {
                    console.log('Username and / or password is incorrect')
                }
            } else {    
                console.log('Username and password must be present')
            }
        }
    }
}
</script>
