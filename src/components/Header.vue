<template>
  <div class="header">
    <h1>cgpa</h1>
    <h4 v-if="calcCGPA !== 'NaN'">{{calcCGPA}}</h4>
    <h4 v-else>0.00</h4>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['calcCGPA'])
  }
};
</script>



<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  background: url('../assets/white-wooden-bookshelves-1319855-min.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.header::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.header h1 {
  font-size: 5rem;
  margin: 0.5em 0;
  color: whitesmoke;
  text-transform: uppercase;
  letter-spacing: 3px;
  z-index: 1;
}

.header h4 {
  font-size: 4rem;
  letter-spacing: 3px;
  color: white;
  z-index: 1;
}
</style>