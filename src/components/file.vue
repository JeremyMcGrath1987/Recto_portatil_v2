<template>
    <div class="file">
        <div
            class="border border-recto-dark card relative hover:border-recto-light hover:shadow-lg cursor-pointer"
        >
            <ul class="file-data">
                <li>{{ file.name }}</li>
                <li>{{ file.identification }}</li>
                <li>{{ file.id }}</li>
            </ul>            
        </div>
    </div>
</template>
<script>
export default {
    name: "file",
    props: {
        file: {
            type: Object,
            required: true
        }
    },
    computed: {
        fileImage: function() {
            return (
                this.file.image ||
                require("../assets/images/file_bg_pattern.png")
            );
        }
    }
};
</script>

<style lang="scss">
.card {
    .file-data {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(22, 18, 51, 0.8);
        padding: 5px;
        li {
            border: none;
            display: block;
            line-height: 1.5rem;
        }
    }
    .file-status {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
    }
    height: 84px;
    width: 310px;
    font-size: 17px;
    margin-bottom: 10px;
}
</style>
