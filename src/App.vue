<template>
    <div id="app">
        <Dashboard>
            <template v-slot:mainView>
                <router-view />
            </template>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/dashboard'
export default {
    name: 'app',
    components: {
        Dashboard
    }
}
</script>