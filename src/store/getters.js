export default {
	calcTotalUnits: (state) => {
		let totalUnits = 0
		state.courses.map((course) => {
			totalUnits += parseInt(course.credit_unit)
		})
		return (state.total_credit_units = totalUnits)
	},

	calcTotalGradePoints: (state) => {
		let point = 0
		let gradePoints = 0
		state.courses.forEach((course) => {
			if (course.grade === 'A') {
				point = 5
				gradePoints += course.credit_unit * point
			} else if (course.grade === 'B') {
				point = 4
				gradePoints += parseInt(course.credit_unit) * point
			} else if (course.grade === 'C') {
				point = 3
				gradePoints += parseInt(course.credit_unit) * point
			} else if (course.grade === 'D') {
				point = 2
				gradePoints += parseInt(course.credit_unit) * point
			} else if (course.grade === 'E') {
				point = 1
				gradePoints += parseInt(course.credit_unit) * point
			} else {
				point = 0
				gradePoints += parseInt(course.credit_unit) * point
			}
		})

		return (state.total_grade_points = gradePoints)
	},

	calcCGPA: (state, getters) => {
		return (state.grade_point = parseFloat(
			getters.calcTotalGradePoints / getters.calcTotalUnits
		).toFixed(2))
	},

	getCGPA: (state) => {
		return state.grade_point
	},
}
