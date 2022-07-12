import InputText from '@components/input/InputText'
import { LoginIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="flex h-screen flex-row-reverse">
      <h1 className="sr-only">Sasja Admin Login</h1>
      <figure className="relative flex-auto">
        <Image src="/handball-field.jpg" alt="handball field" layout="fill" objectFit="cover" />
      </figure>
      <section className="relative flex max-w-xl flex-col justify-center px-16">
        <h2 className="text-6xl font-extrabold">Sasja Admin</h2>
        <p className="mt-16 leading-relaxed text-dark">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sapiente ad voluptatem
          sit hic deserunt totam dolore. Nesciunt provident expedita unde, quasi fuga suscipit quod
          tenetur molestiae, blanditiis similique explicabo.
        </p>
        <span className="mt-8 block h-0.5 rounded-full bg-primary" />
        <form className="mt-8">
          <InputText type="email" name="Email" value={email} onChange={setEmail} />
          <InputText
            type="password"
            name="Wachtwoord"
            value={password}
            onChange={setPassword}
            className="mt-5"
          />
          <button className="btn btn-primary btn-text-icon mt-8 w-full justify-between">
            <span>Aanmelden</span>
            <LoginIcon />
          </button>
        </form>
      </section>
    </main>
  )
}
