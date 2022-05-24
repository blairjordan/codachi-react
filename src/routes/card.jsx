import * as React from "react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { CodachiCardAPI } from "../api"

const baseUrl = "http://api.codachi.monster"

const api = CodachiCardAPI({ baseUrl })

export default function Card() {
  const location = useLocation()
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [cardSerial, setCardSerial] = useState("")
  const [params, setParams] = useState({ type: undefined, name: undefined, level: undefined})

  useEffect(() => {
    if (!isLoading && !errors.length && !cardSerial) {
      ;(async () => {
        try {
          setIsLoading(true)

          const locationParams = location.search
            .substring(1)
            .split("&")
            .map((item) => item.split("="))
            .reduce((prev, curr) => {
              return {
                ...prev,
                [curr[0]]: curr[1],
              }
            }, {})

          setParams(locationParams)
          const { type, name, level } = locationParams
          const cardResponse = await api.generateCard({
            type,
            name,
            level: Number.parseInt(level),
          })

          setCardSerial(cardResponse.body.serial)
        } catch (error) {
          console.error(error)
          setErrors([error])
        } finally {
          setIsLoading(false)
        }
      })()
    }
  }, [cardSerial, errors, isLoading, location])

  return (
    <>
      {cardSerial && (
        <>
          <div className="flex-container">
            <div className="row">
              <img
                className="flex-item"
                src={`${baseUrl}/cards/card-${cardSerial}.png`}
                alt="Codachi card"
              />
            </div>

            <a
              className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=I+coded+my+Codachi+monster%3A+${params.name}+to+level+${params.level}.+Checkout+the+Codachi+VS+Code+plugin+%40+https%3A%2F%2Fcodachi.monster+%F0%9F%91%BE+%23codachi+%23techtwitter`}
              data-size="large"
              target="_blank"
              rel="noreferrer"
            >
              🐦 Tweet this
            </a>
          </div>
        </>
      )}
    </>
  )
}
