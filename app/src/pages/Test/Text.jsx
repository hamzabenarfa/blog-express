import React from 'react'

export default function text() {
  return (
    <div className="bg-black">
    <header className="bg-red-500 py-4">
      <h1 className="text-4xl text-white text-center font-bold">
        Get Your Damn Tables Here!
      </h1>
    </header>
    <main className="container mx-auto p-4">
      <section className="my-4">
        <h2 className="text-3xl font-bold text-white">Welcome to our Freakin' Store!</h2>
        <p className="mt-2 text-gray-300">
          We've got a freakin' awesome selection of printing tables that will blow your mind. Browse through our damn collection and find the perfect table that suits your damn style and needs.
        </p>
      </section>
      <section className="my-4">
        <h2 className="text-3xl font-bold text-white">Featured Tables from Hell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {/* Render your featured tables from hell here */}
        </div>
      </section>
      <section className="my-4">
        <h2 className="text-3xl font-bold text-white">Explore Our Insane Collection</h2>
        {/* Render your table collection of pure madness here */}
      </section>
    </main>
    <footer className="bg-gray-800 py-4 text-center">
      <p className="text-white">&copy; {new Date().getFullYear()} Printing Tables from Hell. All rights reserved.</p>
    </footer>
  </div>
  )
}
