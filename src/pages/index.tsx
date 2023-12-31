import Head from 'next/head'
import Header from '@/components/Header'
import { Highlight } from '@/components/Highlight'

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio - Tijmen van den Ban</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <p>
                <Highlight text="// " className="highlight" />
                Ik ben Tijmen van den Ban. Ik ben 28 jaar uit en in woon in Amsterdam. Ik ben werkzaam voor de Provincie Zuid-Holland als beleidsmedewerker.
                Hierbij ben ik verantwoordelijk voor het invullen van het DSO namens de provincie. In mijn vrije tijd maak ik graag muziek waarbij ik gebruik maak van het programma Ableton. Wil je meer weten, neem contact op met mij via onderstaande gegevens.
                <Highlight text=" //" className="highlight" />
            </p>
            <h2>Contact</h2>
            <Highlight text="// " className="highlight" /> Tel: +31 6 51 92 68 01 <Highlight text=" //" className="highlight" />
            <br />
            <Highlight text="// " className="highlight" /> Email: tijmen.van.den.ban@gmail.com <Highlight text=" //" className="highlight" />
            <br />
            <Highlight text="// " className="highlight" /> LinkedIN <Highlight text=" //" className="highlight" />
        </>
    )
}
