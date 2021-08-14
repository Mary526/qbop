<template>
    <canvas id="draw" width="752" height="752">Your browser can't support canvas tag</canvas>
    
</template>

<script>
    export default {
        name: "demo",
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let myDraw = document.getElementById("draw");
                // if(myDraw.getContext) {

                    let ctx = myDraw.getContext("2d");
                    // context.fillStyle = "#f361ee";
                    // context.fillRect(50, 50, 100, 100);
                    // context.fillStyle = "rgba(0, 0, 255, 0.5)";
                    // context.fillRect(100, 100, 100, 100);
                let image = new Image()
                image.src = 'https://debake.oss-cn-shanghai.aliyuncs.com/room/dantijiaju/di/jpg/Dtjj%20%281%29.jpg'
                image.onload = ()=> {
                    ctx.drawImage(image,0,0,752,752)
                }
                // }

            }
        }
    }
</script>

<style scoped>

</style>