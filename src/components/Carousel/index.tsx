import React from "react"
import styles from "./styles.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as LibraryCarousel } from 'react-responsive-carousel'

export function Carousel() {
    return (
        <LibraryCarousel>
                <div>
                    <img src="src/assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src/assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="src/assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
        </LibraryCarousel>
    )
}