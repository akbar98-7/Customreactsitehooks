import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

const Main = () => {

    const [cards, setCards] = useState([])

    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [img, setImg] = useState('')

    useEffect(() => {
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    const handleSubmit = () => {
        if (!title || !subtitle) return

        const newCard = {
            title,
            subtitle,
            img: img,
            button: 'Go somewhere'
        }

        setCards([...cards, newCard])
        setTitle('')
        setSubtitle('')
        setImg('')
    }

    return (
        <div className='main fs-4'>

            <label htmlFor="title" className="form-label text-white">Title</label>
            <input type="text " className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br></br>

            <button type="button " class="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <br></br>
            <br></br>


            <label htmlFor="title" className="form-label text-white">Subtitle</label>
            <input type="text" className="form-control" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            <br></br>

            <button type="button " className="btn btn-primary " onClick={handleSubmit}>Submit</button>

            <br></br>
            <br></br>

            <label htmlFor="img" className="form-label mt-3 text-white">
                Image URL
            </label>
            <input
                type="text"
                className="form-control"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Enter image URL"
            />

            <br></br>


            <div className='d-flex align-items-center'>
                <div className="row">
                    {cards.map((item, index) => (
                        <div className="col-4 px-3  " key={index}>
                            <Card item={item} />


                        </div>
                    ))}

                </div>
            </div>


            <br></br>
            <br></br>

            <h2 className='text-white'>Subscribe to receive offers</h2>
            <br></br>

            <label for="exampleFormControlInput1" className="form-label text-white">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

            <br></br>

            <label for="exampleFormControlInput1" className="form-label text-white">First Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />

            <br></br>

            <label for="exampleFormControlInput1" className="form-label text-white">Last Name </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />

            <br></br>

            <button type="button " className="btn btn-primary">Submit</button>

        </div>

    )
}

export default Main
