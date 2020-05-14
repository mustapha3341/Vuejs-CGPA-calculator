<template>
  <div class="course">
    <h4 class="course__code">cosc101</h4>
    <h4>3</h4>
    <h4>A</h4>
  </div>
</template>

<style lang="scss" scoped>
.course {
  padding: 1.5em;
  -webkit-box-shadow: -2px 2px 10px 1px rgba(199, 199, 199, 1);
  -moz-box-shadow: -2px 2px 10px 1px rgba(199, 199, 199, 1);
  box-shadow: -2px 2px 10px 1px rgba(199, 199, 199, 1);
  border-radius: 5px;
  display: flex;
  align-items: center;

  .course__code {
    flex: 1;
  }
}
</style>