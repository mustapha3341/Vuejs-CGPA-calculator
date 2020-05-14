export default {
	addCourse: ({ commit }, payload) => {
		commit('appendCourse', payload)
	},
	removeCourse: ({ commit }, id) => {
		commit('deleteCourse', id)
	},
}
