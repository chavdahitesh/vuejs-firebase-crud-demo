<template>
<div class="row justify-content-center">
    <div class="col-md-12">
        <CreateUser />
    </div>
</div>
</template>

<script>
import CreateUser from '../components/CreateUser'
import ListUser from '../components/ListUser.vue'
export default {
    components: {
        CreateUser,
    }
}
</script>
