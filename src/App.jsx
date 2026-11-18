import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (name.trim() === '') {
      newErrors.name = 'Имя не должно быть пустым'
    }
    if (password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов'
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Имя:', name)
      console.log('Пароль:', password)
    }
  }

  return (
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Имя</label>
          <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Отправить</button>
      </form>
  )
}

export default App