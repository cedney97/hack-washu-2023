<template>
    <div>
    <input v-model="prompt" placeholder="Enter your prompt" />
    <button @click="getGptResponse">Ask ChatGPT</button>
    <div v-if="response">
    <h3>Response:</h3>
    <p>{{ response }}</p>
    </div>
    <div v-if="error">
    <p style="color: red;">{{ error }}</p>
    </div>
    </div>
    </template>
<script>
export default {
    data() {
        return {
            prompt: '',
            response: null,
            error: null
        };
    },
    methods: {
        async getGptResponse() {
            try {
                const result = await this.$axios.$post('/server/api/openai/generate', { prompt: this.prompt });
                if (result && result.response) {
                    this.response = result.response;
                    this.error = null;
                } else {
                    this.error = 'No response from ChatGPT.';
                    this.response = null;
                }
            } catch (err) {
                this.error = err.message || 'Error getting response';
                this.response = null;
            }
        }
    }
};
</script>