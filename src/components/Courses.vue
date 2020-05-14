<template>
  <div class="course__list">
    <div class="container">
      <table class="data__table">
        <thead>
          <th>course code</th>
          <th>credit unit</th>
          <th>grade</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>{{course.course_code}}</td>
            <td>{{course.credit_unit}}</td>
            <td>{{course.grade}}</td>
            <td>
              <button @click="removeCourse(course.id)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Course from './Course';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Course
  },
  computed: {
    ...mapState(['courses'])
  },
  methods: {
    ...mapActions(['removeCourse'])
  }
};
</script>


<style lang="scss" scoped>
.course__list {
  padding: 1em;
}
.container {
  width: 60%;
  margin: 0 auto;
}

.data__table {
  display: block;
  width: 100%;
  margin: 1em 0;
}

.data__table thead,
.data__table tbody,
.data__table thead tr,
.data__table th {
  display: block;
}

.data__table thead {
  float: left;
}

.data__table tbody {
  width: auto;
  position: relative;
  overflow-x: auto;
}

.data__table td,
.data__table th {
  padding: 0.625em;
  line-height: 1.5em;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.data__table th {
  text-align: center;
  background: rgba(0, 0, 0, 0.14);
  border-bottom: 1px dashed #aaa;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.data__table tbody tr {
  display: table-cell;
}

.data__table tbody td {
  display: block;
}

.data__table tr td {
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
}

.data__table tr td button {
  padding: 0.8em;
  border-radius: 3px;
  border: none;
  text-transform: capitalize;
  background: rgb(74, 99, 175);
  color: white;
  cursor: pointer;
}

.data__table tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.07);
}

@media screen and (min-width: 50em) {
  .data__table {
    display: table;
  }

  .data__table thead {
    display: table-header-group;
    float: none;
  }

  .data__table tbody {
    display: table-row-group;
  }

  .data__table thead tr,
  .data__table tbody tr {
    display: table-row;
  }

  .data__table th,
  .data__table tbody td {
    display: table-cell;
  }

  .data__table td,
  .data__table th {
    width: auto;
  }
}
</style>