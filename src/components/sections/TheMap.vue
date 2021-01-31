<template>
  <div class="map__container">
    <gmap-map
      :center="center"
      :zoom="zoom"
      v-if="feedLoaded"
      ref="map"
      :options="options"
    >
      <gmap-marker
        :draggable="true"
        :key="index"
        v-for="(m, index) in locations"
        :position="{
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng)
        }"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "TheMap",
  props: {
    centerRef: {
      type: Object,
      default: function() {
        return {
          lat: -7.967199995673553, 
          lng: 112.61781697676939
        };
      }
    },
    zoomVal: {
      type: Number,
      default: function() {
        return 7;
      }
    }
  },
  data() {
    return {
      //mapIconSrc: require("@/assets/Pin.svg"),
      feedLoaded: true,
      zoom: this.zoomVal,
      center: this.centerRef,
      options: {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false
      },
      mapTypeId: "styledMapType",
      locations: [
        {
          lat: -7.931138073602653, 
          lng: 112.63756726835686
        }
      ]
    };
  },
  mounted() {
    console.log(this.locations);
  },
};
</script>

<style>
.vue-map-container {
  width: 100%;
  height: 901px;
}
.map__container {
  width: 100%;
  position: absolute;
}
.map__container:after {
    content: "";
    top: 0;
    left: 0;
    background: rgba(159, 154, 207, 0.49);
    width: 100%;
    height: 100%;
    position: absolute;
  }

</style>
