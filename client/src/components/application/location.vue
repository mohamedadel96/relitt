<template>
    <section>
        <div> Location</div>

<div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div></div>
    </section>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.mapouter{position:relative;text-align:right;height:250px;width:1080px;}
.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:1080px;}
</style>