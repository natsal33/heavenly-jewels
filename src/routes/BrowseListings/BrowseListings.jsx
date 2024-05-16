import React from 'react'
import ListingCard from '../../Components/ListingCard'
import {Typography} from "@material-tailwind/react";
import CONTENTS from '../../dummyData.js'

function BrowseListings() {
  return (
    <section className="py-10 px-8">
    <div className="mx-auto text-center mb-16">
      <Typography className="font-medium text-lg">
        Tailored Product Search
      </Typography>
      <Typography variant="h1" className="my-4 text-4xl">
        Find What You Need
      </Typography>
      <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
        Simplify your shopping experience with our intuitive filter system.
        Whether you&apos;re looking for specific features, price ranges, or
        brands.
      </Typography>
    </div>
    <div className="mx-auto container">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        {CONTENTS.map(({ img, name, id, price }, index) => (
          <ListingCard
            key={index}
            id={id}
            img={img}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default BrowseListings