import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert('Form submitted successfully!')
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis amet saepe eius voluptas assumenda officiis architecto optio.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" placeholder="Enter your email address" className='w-full sm:flex-1 outline-none ' required />
                <button type="submit" className='bg-black text-white text-xs px-10 py-4 uppercase'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox