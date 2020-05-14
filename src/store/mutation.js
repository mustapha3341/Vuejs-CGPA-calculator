export default {
	appendCourse: (state, payload) => {
		state.courses.push(payload)
	},

	deleteCourse: (state, id) => {
		return (state.courses = state.courses.filter(
			(course) => course.id !== id
		))
	},
}
