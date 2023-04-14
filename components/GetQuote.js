import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Author from './Author';
import Tweet from './Tweet';
import Linkedin from './Linkedin';
import Button from './Button';

const quotes = [
    {
        quote: "In the world you will have tribulation. But take heart; I have overcome the world.",
        author: "John 16:33"
    },
    {
        quote: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        author: "Isaiah 41:10"
    },
    {
        quote: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        author: "Philippians 4:6~7"
    },
    {
        quote: "I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!",
        author: "Psalm 34:4~8"
    },
    {
        quote: "And we know that for those who love God all things work together for good, for those who are called according to His purpose.",
        author: "Romans 8:28"
    },
    {
        quote: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",
        author: "Joshua 1:9"
    },
    {
        quote: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.",
        author: "Proverbs 3:5~6"
    },
    {
        quote: "If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.",
        author: "2 Chronicles 7:14"
    },
    {
        quote: "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.",
        author: "Philippians 2:3~4"
    },
    {
        quote: "Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.",
        author: "1 Peter 5:6~7"
    },
    {
        quote: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. And He who was seated on the throne said: Behold, I am making all things new.",
        author: "Revelation 21:4"
    },
    {
        quote: "I can endure all these things through the power of the one who gives me strength.",
        author: "Philippians 4:13"
    },
    {
        quote: "Taste and see how good the Lord is! The one who takes refuge in him is truly happy!",
        author: "Psalm 34:8"
    },
    {
        quote: "Jesus answered: I am the way, the truth, and the life. No one comes to the Father except through me.",
        author: "John 14:6"
    },
];

const GetQuote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const handleChange = () => {
        let randomN = Math.floor(Math.random() * 14);
        let newQuote = quotes[randomN];
        const pickQuote = document.getElementById("phrase");
        const pickAuthor = document.getElementById("author");
        //fade animation when the quote changes, it comes from tailwind.config.js
        pickQuote.style.animation = "fade 1.5s ease-in-out running";
        pickAuthor.style.animation = "fade 1.5s ease-in-out running";
        setTimeout(() => {
            pickQuote.style.animation = "none";
            pickAuthor.style.animation = "none"
        }, 1500);
        setTimeout(() => {
            setQuote(newQuote.quote);
            setAuthor(newQuote.author);
        }, 750);
        const parentElement = document.getElementById("quote-box");
        //blurry animation
        parentElement.style.animation = "bluring 1.5s ease-out running";
        setTimeout(() => {
            parentElement.style.animation = "none";
        }, 1500);
    }

    useEffect(() => {
        let randomN = Math.floor(Math.random() * 14);
        let newQuote = quotes[randomN];
        setQuote(newQuote.quote);
        setAuthor(newQuote.author);
    }, []);

    //variable being used to share the current message in the Tweet component
    const msgShare = {
        quote: quote,
        author: author
    };

    return (
        <>
            <Quote quote={quote} />
            <Author author={author} />
            <div className='col-start-1 col-end-11 row-start-8 row-end-9 flex'>
                <div className="flex justify-start items-center w-full">
                    <Tweet msg={msgShare}/>        
                    <Linkedin /> 
                </div> 
                <Button handleChange={handleChange} />
            </div>             
        </>
    )
}

export default GetQuote;