<template>
    <div class="v-overlay"></div>
</template>
<script>
export default {
    name: 'vOverlay'
}
</script>
<style scoped lang="scss">
        .v-overlay{
        position: fixed;
        top: -20px;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color:  #757575;;
        opacity: .75;
    }

</style>