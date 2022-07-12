import InputText from '@components/input/InputText'
import Loading from '@components/Loading'
import { LoginIcon } from '@heroicons/react/outline'
import { auth } from '@services/firebase'
import { AuthError, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FormEventHandler, useEffect, useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/admin/dashboard')
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  const logInHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push('/admin/dashboard')
      })
      .catch((err: AuthError) => {
        setError(err.message)
        setIsLoading(false)
      })
  }

  if (isLoading) return <Loading />

  return (
    <main className="flex h-screen">
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
        <form onSubmit={logInHandler} className="mt-8">
          <InputText type="email" name="Email" value={email} onChange={setEmail} />
          <InputText
            type="password"
            name="Wachtwoord"
            value={password}
            onChange={setPassword}
            className="mt-4"
          />
          <button
            type="submit"
            className="btn btn-primary btn-text-icon mt-8 w-full justify-between"
          >
            <span>Aanmelden</span>
            <LoginIcon />
          </button>
        </form>
        <p className="mt-5 text-primary">{error && error}</p>
      </section>
    </main>
  )
}
