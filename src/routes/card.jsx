import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CodachiCardAPI } from "../api"

const api = CodachiCardAPI({ baseUrl: "localhost:8080" })

export default function Card() {
  const { type, name, level } = useParams()
  const [state, setState] = useState({ errors: [] })

  useEffect(() => {
    ;(async () => {
      try {
        const cardResponse = await api.generateCard({
          type,
          name,
          level,
        })

        console.log(cardResponse)
      } catch (error) {
        setState({ ...state, errors: [error] })
      }
    })()
  }, [state, type, name, level])

  return (
    <main style={{ padding: "1rem 0" }}>
      <p>{state.errors}</p>
      <h2>Card</h2>
    </main>
  )
}
