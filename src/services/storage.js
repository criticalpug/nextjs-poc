export const KEYS = {
  QUESTIONS: 'questions'
}

const storage = {
  session: {
    set: (key, value) => sessionStorage.setItem(key, value),
    get: key => sessionStorage.getItem(key),
    remove: key => sessionStorage.removeItem(key)
  },
  local: {
    set: (key, value) => localStorage.setItem(key, value),
    get: key => localStorage.getItem(key),
    remove: key => localStorage.removeItem(key),
    clear: () => localStorage.clear()
  }
}

export default storage