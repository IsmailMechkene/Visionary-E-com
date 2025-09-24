import { useState, useEffect, useCallback } from "react";
import "./Reviews.css";

const REVIEWS = [
    {
        stars: 5,
        text:
        "The glasses are lightweight yet premium, with a design that feels both timeless and modern. I’ve never felt so confident wearing a pair. Truly love the craftsmanship and the attention to detail; you can tell they were made to last.",
        author: "Emma Johnson",
    },
    {
        stars: 5,
        text:
        "Beautifully finished and super comfortable. The lenses are crystal clear and the fit stays perfect all day. Easily the best pair I own.",
        author: "Noah Williams",
    },
    {
        stars: 4,
        text:
        "Great value and style. Shipping was fast, packaging was classy, and the frames look even better in person.",
        author: "Ava Martin",
    },
];

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0); // triggers fade animation
    const review = REVIEWS[index];

    const go = useCallback(
        (delta) => {
        setIndex((i) => (i + delta + REVIEWS.length) % REVIEWS.length);
        setAnimKey((k) => k + 1);
        },
    []);

    const prev = () => go(-1);
    const next = () => go(1);

  // Keyboard arrows
  useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []); // prev/next are stable via go()

    return (
        <section className="Reviews">
            <p className="Reviews_label">Clients’ reviews</p>
            <h2 className="Reviews_headline">Testimonials</h2>

            <div className="Reviews_slider">
                <button
                    className="Reviews_nav Reviews_prev"
                    onClick={prev}
                    aria-label="Previous review"
                    >
                    ‹
                </button>

                <article key={animKey} className="Reviews_slide fade-smooth">
                <p className="Reviews_stars">{"★".repeat(review.stars)}</p>
                <blockquote className="Reviews_review">“{review.text}”</blockquote>
                <p className="Reviews_author">{review.author}</p>
                </article>

                <button
                className="Reviews_nav Reviews_next"
                onClick={next}
                aria-label="Next review"
                >
                ›
                </button>
            </div>

            <button className="Reviews_button">ADD REVIEW</button>
        </section>
    );
}
