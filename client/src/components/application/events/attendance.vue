<template>
  <section id="attendance">
    <div class="d-flex pt-1 pb-2 border-bottom" v-if="event">
      <div class="col-6 pl-0 my-2 d-flex align-items-baseline">
        <div>
          <img class="mr-3" src="../../../assets/icons/social.svg" alt />
        </div>
        <div>
          <p class="font-weight-bold font-14">Attendees (3)</p>
          <div class="col-11 px-0">
            <img
              v-for="i in 8"
              :key="i"
              class="rounded-circle attendee mb-2"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVFRUXFRcVFRUVFRcXFxcXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADAQAAIBAgQEBQQDAQEBAQAAAAABAgMRBCExQQUSUWETcYHB8JGh0eEUIrHxBnIV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACQRAAICAgMBAAMAAwEAAAAAAAABAhEDEgQhMRMUQVEiMkIF/9oADAMBAAIRAxEAPwDoVagtKoErJi/hs+0ikfJSbL8QvxFbv7FeG7W6hqeG2lvl1t1X/wBGk4oCTYDxCnMy4E5H9SioTstTLVQxYy0GkYM8QD8Zt2QKUTPIFRQrkyOqWmSCad0Ep0m8l59vMLaQEmyQkHhVJChHTO+zt/iv/pbwz2zVr37EnKL9KqMkXLEAZVycueav2BOAyihXJhPGIqxiUc8si4w1v6DUqBbDOv2tl8ZfjgHFW77+xagLqg2w8aodVrXVs76iagw0aWn+dBJRQ0WxnxjDqrfp99vQ3HDSvZ7Za+tl3JiKOltNV06fXqRTjdFalVisqpSqm/47Ljhut/3sWuNE6kZVY2qpSwwanhe+317Ak4oKUilIy2MRwpp4R289Se6H1kITmZldX7W36jU8GzEsHZZ5Z3yV369h94iOMgMK4zSxQv8Axejvbtb6dSRp5dwvVgTkjo/zChDlZCfziP8ASR262FSFZwSVtr3OniYZa+nvcT8Jr+3f7nNHJ12dMod9A6VO2dr633tlmvvqVWovJZ2a63v59X3GoRv/AFS9LZ56pfQZo4e4ryU7YVC1SOR/DStfPqtPQG8G3osl9rnfeFMeF29QrkAeA4M8GwNSg27s9RDDpga+ESHjyexZcc8tKkUqDOxVoJAJWR0rLaOd4qFFhM8tO+o3DCpWWztd9c/Yy6hqE77ZpNJddfvmJNyaGioofrYWEU3FWtmvm4lODSd1ZPr12suprDz1cm2layvlfyBVpuTu/RdCcIu6ZSTXopKJSpDUYjNOlle2WhZ5KJKFnNnSbzMeA+h2oYZvJK/kZrcPqK/9JfQVZ0ug/F+nHjSDxp5ab6+x16PAq0lfl5b5q/TqVPgVdPKKfkwPkY3/ANIZYJrumc6nTGqVBP59jFbCVIO0otN6FQrW1Wl1080xZS2/1Y0Vr6hxVEo5ZX9LvtvddRWbuZdS+y9EUCEKDKdmuT67+1i/CLghinTuZy1MlYsqLCwosdhRDU7IlLK/0VWMWpUBhUQykinNIi5tlFFIz/FVr5fOxIYBSTbV3ct4hFxrq6s3nb/duwlzQy1EavDGpPlTy+agpYHt5+Z08RjEv6x03fUFGumVjkyVbJyhDxCH8HsQ6fiIg31kD5RAVptaCam/nsOYlISnIMEmgTdMPSqWz3DwxvLoc11CrsZ40/RVka8OrLGXW/tbYWliBXmy13zRV73eXl1u9gLGkZ5Gx2GKZmeIuKRTDQpNhcYrs20mZmri06Z0FRMVMOGM0gShZzuQjp5jscIxzDcMvqNLNFesWOJyOW23l2z753uX4fbax6GlwqJutwtK1l87EPyYJ0X/AB5enAp4VvRNnY4bwKU7OWS+56PhfDlCOazOpGmkcObnvyJ14uEvZHPwXC4QVkhv+IugwRSPOlkk3bZ3xxxSqgUaKRXhK+htya1MqsgWw9COP4ZGas189jznE/8AzOXNBu9tNvJdD2UJLb9Ik6dy+Lk5Mb6ZHLxoZF2fK1RaysEWFk3ZK77ZnvqnB6cpczigtDhcI6JI9F/+lGukcC4ErPE4bhlRu3K/U6cODTSvY9dDDpG3SRyz58mdMOEkeHrUZR1TFJHvJ4RPVHJxXA4u7Taf2K4uZF+k8nFkvDy/MzEqrs88tx+vgnFtMVnBrNbHapp+HLKLQlOsDdeSyzV8/qFlSa06W9AVSg0XWpzvYzzvXbQLCqDVLT7hPCsFtAVh1VICsULqhtmOV31/Bz5s6OKQhVeqWl72/YuMOQqLcc9H92n0MOZGjPp6+xZIm2aWZ0MDhOZiNGJ1sGyWaTS6KYo2+xieEVtM/KxmnSsbqVuphyZxpyrs6nVm5oDyhKc+rJWqr16+wVa6A69MQSDwxNhVSMV6txnG2DahiePaeR2uDVHU/s1pl5HnsDhfGqcqyW9voe04dgo04pRRy8uUIRpel+MpSlb8HYRsUnnt7miJHlnplNi2JxKirt2C15WTPC8WxjlOVm+W+WZ08bB9ZHNyM/zR6LEcZjb+ubONU4tOOjRxudlST33zPVhxIRPNnyZSPVcF4vzvllrt3PSU53Pm+GquDUla66+x7rhmKU4qXVHDzcGruPh28TPt0zoEMykB8fv6ZHn1Z22kMkEv5qva4eNT18v2FxaMpphjMokiWAJx+NUFyuXQ8zzXPVcaoylTkk9jw1SUouzR63CW0PTy+W9ZDs0gUkrbee/lfoLOoy41Dt0dHI5oJyGJQNqTbCeHkG69NVivIQPykG2F1GsXBCFWmNVmAaEh0h59sWdMzOGelvLQejAzOkUU+ybgKwQ/QYKNEYpRsTnJMeEWjVV20+dQPiMZcUDdMnFoo0wDm2UElApofoSmRMzyt5I1FBYwRm6DVnT/APMU85N7ZL11PWQWR5/gFNJd2d+L+h43LleRnqcVVA0U2Vz5XSb+3+kkcx0sFVV1Y81xfhCSc4+qOvjMb4bs15M5nEOI8ysjt48ckXa8OLO4SVP085KFgbGakQLp7nsKR5jRjmHeH8TnS0zXQVVMPSpP59AT1aphhsnaOtV/9G+XKOZyJYyo23zvPuHWF7BKXD3J2RCKxQ8RWTyT9YPhlR8+dz1vD5StmB4dwqNNaZ7tnUp00jz+TnjN9Hdx8Mors3F3LKi1sWziOwXxckk2zwfE6sZyy6nr+Myfhy8meQWHPU4KSTkebzG29RPw8+oSMDpU8CXLD8um52vMvEcixMUpwCNF1I209f0AcjLs3huyIC5iBoFhpowkHlAuNLf7e4uySH1YNIjfb9d0H5e1/NffsDauLsHUHGVut9uxSkacSrD9CmrmkZjBjMKV9FbL4xJNIZKxWUSuQ6P8YBOlZgWRBcAMYBYUg1CkNOKWyXkJLJToaMDOCk4NM79Kte1r/XT8nm/F+e1zVLHNSSvv8T9dzmy4nM6MeTQ9XEtC2ErqSVvnqNJHntU6O1O1YpjMMpLNHn8Zg3E9TJCtfD3WfzyL4czh0Ry4lLtHk3hW9no7Wtr3vsB8DselXD7jcMHFK1jr/LSOVcZs8nSwzeiZ0sNwqWrSPQUsKlognIiOTmN+FocVL04//wCc/iHMLg+XPcdUFszUTneaTVF1hSLii0iFRuSKlRlnYqTW5cpW29TkcVx3LF2eew+ODm6QmSairNcZrpQffL/h5pSKr15TzlK9tvwC5j1sOH5xo8vLl3lY3HEWM1KvX8CzqXzy9NCOd+7KKH7E2LnMXbuNQVs/e3ml0YLk+afYeMuxZIDYgz4RBtxdWMSJHT6e5ckUiP6LDNKaSs8mr3ATo7vK+i3NU9UFnC+b/XoTumP6hOSIoeXv6hpQV92vozKRSxKN0orV2ytl1HIWsrITj8fsGjL5+CU1Y8XQSpIAkblO5lt6d7+pkqQWbhKxmrV/YSFLqFnh1sI5JMKi6OdJNXyy30+nldmaUL6sZqUgtDD8zz7L6FNqVia2x/hcrO2x3IM5+CoJaD8F3PNzSTlZ6GGLSNFNFkIljHIbSLM3z0NZqJLQypaZPzN2M6eRgkln8yJFFxKnMyA2abMymJ4jE2QlU4lZaFY4pSJSypDWOxSS77HmsXeUuoTEVXKTkwbW+2nqehhx/M4cs3Ni3IVa2aCyMNHTZztA+Xr3+vUtQ87/AG628stQkYXv8v1zKBdhqiPa9889lfr+CJFpBErfo3hvSKJQa5BbHo1UpgrD1SiCnRsJGYziBp/e/pb8jLleyTem/Xe3YBYJR1BJfsyL8DXT1/0BKB1Iot0L5k1kp9juFnKVN/PY1Gk2dGeHt30zs9ylEP1sHzEuSxtRCVQDYbbNVBFO34NxuzFKFx2nTEk0hopsAqIWnCwXkMy8v35iOVja0OUJ2Hacjj023kjp4aDSzZz5I0dGOQyQpgqlayIJWXugvNn2KlUE/wCQ2Yld7lFj/pN5P4OOqZliF1EZVrZXuIV8SluUjhslLNR2niEBrYtdThzxbASqNl48b+kpchnQxOKWwhUqX9une5UYth6WDbLpRgRbchSOb1NxpNnXpYHS+3uMwwy/5a/3Jy5CXg8cLZwZYZ7rPp2tqZdFneqUkLVII0czZnio47gVyj04Z5AlRLKZJxFbGoxHY4YLTwxnlQVBiPhMh1f45Cf2H+ZcoAasDoygK1UQjIrKIjKkXRp3Y04d/S3uSFPor+RTfoTUJTh83DXF+YzKp5/NCVNj3QSrUFZskm2bp0yiSiK3YBx7fPybWH+LMdhQNqmK8v8AArGYoYe2WS76r9jMYg7pb/NiqlaxJ22USSRuVjCp3AwndnTisjSeoY/5CXLyjNHEJrUHic8gMKYKUl2ZXF9Dn8hC1ebfl06l2MyYFFJ9Gbb9MxnYzUr9DMinFv00KUhLYpXqNirv02afc6v8W+33+WLWDKrJFE3Bs5EaLYzTwN+uv28up04YNDEKKFlyP4NHD/RXDYFLUep4eK2Xz3NLIzOtY5pSlJnQoqKLlFC9WokBr4sRq1WysMbfpOeRfoYrYhfH7CsqpjkbD0aed1l9+25alEjbYOKuHhQ81839A1OjYPCIkp/weMAVOgMQpIJEsi5NllFIzyIssoAaRqcBOcOw5UkLvU0WwSSA+GFjSNqJuwzkKoilSmBlT7fsclEw4dn87DKQHEXjSGqVIzGPa3lkGivmwJSZooKkCqs05ApIRIdsHd3yyffIDnbz2/IxyF+F8/RS6EqxWMHqNQqM0oF8oJSsKjRm3b8ll2MuP/fYUJHIipXNRj8/YxEDlXgdbBQorzNciCNg5MW2xqSKaIrGblOYaBYZMxOoCu+tzLiFRA2XUri1ST7+obkIqZRUhHbEpRZI0R7wicg30F0AU6KDwpouxdxG2xkkiNET9O2xTZRqGCKRrmMRQRIVhRWZZogthozJGbe9vXuMyRnlBYaBKJU+gWQPl+P/ADujWGjMVlv6k5QvJ3L5TWLQJQNWCqJLGsOoJIlgjRmS7Gs1GYl2LsZYbNRRaRfL2KcbAs1EsSxuxdjWajKRpItLMt5fLgsNGWYlEM/qXYFh1FXDpby/BOUO4mXEZSF1BNdf+mYxz/WX1CtG4Re/5+MGwdQPKSwZorl7B2BqBZSD+GXyB2BqLuJfh/EHULfLkaBsHUDyFOIVlcnxm2BqYRuKIofU1FGsNEsQ0QFhCGZPbchBRzFvnuEUSEMYnKWkUQwCSXQiRCGCSxXKWQwCmjCW3z5oQgTGmtichCAMa5S0iiGCWi7EIAJCEIYxTByIQwDUYG7EIYxLFWIQxiuVEsQgTGWvmhEiECKZkaIQxilE2okIAJdiEIYx/9k="
              alt="attendee"
            />
          </div>
        </div>
      </div>
      <div class="col-6 pl-0 mt-2 d-flex">
        <div>
          <p class="font-weight-bold font-14">Organizer</p>
          <div class="col-11 px-0">
          <b-tooltip target="organizer" variant="secondary" placement="right">{{ event.organizer.firstname + ' ' + event.organizer.lastname + ' ' + '( ' + event.organizer.email + ' )' }}</b-tooltip>
            <img
              id="organizer"
              class="rounded-circle attendee mb-2 pointer"
              :src="event.organizer.image"
              alt="attendee"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.event;
    }
  }
};
</script>

<style lang="scss" scoped>
#attendance {
  .attendee {
    width: 50px;
    height: 50px;
    margin-right: -5px;
    box-shadow: 1px 1px 1px #aaa;
  }
}
</style>