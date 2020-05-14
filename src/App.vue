<template>
  <div id="app">
    <Header />
    <AddCourse />
    <Courses />
  </div>
</template>

<script>
import Header from './components/Header';
import AddCourse from './components/Addcourse';
import Courses from './components/Courses';

export default {
  name: 'App',
  components: {
    Header,
    AddCourse,
    Courses
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
