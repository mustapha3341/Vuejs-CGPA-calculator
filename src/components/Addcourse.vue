<template>
  <div class="add__course">
    <div class="input__container">
      <div class="input__group">
        <!-- <h2>credit unit</h2> -->
        <select name="credit_unit" v-model="course.credit_unit" id="credit__unit">
          <option value>Enter Unit</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div class="input__group">
        <!-- <h2>course code</h2> -->
        <input
          type="text"
          name="course_code"
          v-model="course.course_code"
          placeholder="enter course code"
        />
      </div>
      <div class="input__group">
        <!-- <h2>grade</h2> -->
        <select name="grade" id="grade" v-model="course.grade">
          <option value>Enter Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </div>
      <div class="input__group add__button">
        <button @click="handleSubmit">
          Add Course
          <span class="material-icons md-26">add_box</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      course: {
        course_code: '',
        credit_unit: 0,
        grade: ''
      }
    };
  },

  methods: {
    ...mapActions(['addCourse']),
    handleSubmit() {
      const id = new Date().toISOString();
      const { course_code, credit_unit, grade } = this.course;
      const payload = {
        id,
        course_code,
        credit_unit,
        grade
      };
      this.addCourse(payload);

      // clear form after submit
      this.course = {
        course_code: '',
        credit_unit: 0,
        grade: ''
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.add__course {
  width: 100%;
  padding: 1em;
  background: #eee;
}

.input__container {
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
}

.input__group {
  text-align: center;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-transform: capitalize;
    margin-bottom: 0.7em;
    font-size: 1.5rem;
  }

  select {
    padding: 0.8em;
    font-size: 1rem;
    width: 50%;
  }

  button {
    border: 1px solid #eee;
    background: royalblue;
    cursor: pointer;
    outline: none;
    margin: 0.5em auto 0.5em;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.6em;
    color: white;
    border-radius: 5px;

    .material-icons.md-26 {
      font-size: 26px;
      color: white;
      margin-left: 0.5em;
    }
  }

  input {
    padding: 0.8em;
    width: 100%;
    font-size: 1rem;

    &::placeholder {
      text-transform: capitalize;
      font-size: 1rem;
    }
  }
}
</style>