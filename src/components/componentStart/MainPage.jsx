import React from 'react';
import Card from './Card'
import '../styles/MainPage.css'



export default function MainPage({ camisetas }) {

    return (
        <>
            <section className='bk'>
                <h1>TUFCLASICAS</h1>
                <div className="containerMP">
                    {camisetas.map(({ id, img }) => (
                        <Card key={id} img={img} />
                    ))}
                </div>
            </section>
        </>
    )
}