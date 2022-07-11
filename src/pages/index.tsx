import InputDate from '@components/input/InputDate'
import InputDateTime from '@components/input/InputDateTime'
import InputText from '@components/input/InputText'
import { Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'

export default function HomePage() {
  const [v, sv] = useState('')
  const [d, sd] = useState(Timestamp.now())

  return (
    <main className="container">
      <h1>Sasja HC</h1>
      <div className="mt-8 grid grid-cols-2 gap-8">
        <InputText
          name="Text input"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sapiente accusamus adipisci numquam! Magnam, numquam maxime aliquid iste alias tempora labore eius, fuga eveniet facere, quisquam ullam cupiditate praesentium? Eveniet."
          type="text"
          value={v}
          onChange={sv}
        />

        <InputText
          name="Text input"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sapiente accusamus adipisci numquam! Magnam, numquam maxime aliquid iste alias tempora labore eius, fuga eveniet facere, quisquam ullam cupiditate praesentium? Eveniet."
          type="text"
          value={v}
          onChange={sv}
        />

        <InputText
          name="Text input"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sapiente accusamus adipisci numquam! Magnam, numquam maxime aliquid iste alias tempora labore eius, fuga eveniet facere, quisquam ullam cupiditate praesentium? Eveniet."
          type="text"
          value={v}
          onChange={sv}
        />

        <InputDate
          name="Text input"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sapiente accusamus adipisci numquam! Magnam, numquam maxime aliquid iste alias tempora labore eius, fuga eveniet facere, quisquam ullam cupiditate praesentium? Eveniet."
          value={d}
          onChange={sd}
        />

        <InputDateTime
          name="Text input"
          info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sapiente accusamus adipisci numquam! Magnam, numquam maxime aliquid iste alias tempora labore eius, fuga eveniet facere, quisquam ullam cupiditate praesentium? Eveniet."
          value={d}
          onChange={sd}
        />
      </div>
    </main>
  )
}
