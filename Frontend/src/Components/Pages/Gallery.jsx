import React, { useState } from "react";
import "./Gallery.css";
import gallery01 from "/GalleryImage/gallery01.jpg";
import gallery02 from "/GalleryImage/gallery02.jpg";
import gallery03 from "/GalleryImage/gallery03.jpg";
import gallery04 from "/GalleryImage/gallery04.jpg";
import gallery05 from "/GalleryImage/gallery05.jpg";
import gallery06 from "/GalleryImage/gallery06.jpg";
import gallery07 from "/GalleryImage/gallery07.jpg";
import gallery08 from "/GalleryImage/gallery08.jpg";
import gallery09 from "/GalleryImage/gallery09.jpg";
import gallery10 from "/GalleryImage/gallery10.jpg";
import { IoCloseSharp } from "react-icons/io5";

function Gallery() {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const [viewAll, setViewAll] = useState(false); // View All toggle

    const GalleryData = [
        { id: 1, imgSrc: gallery01 },
        { id: 2, imgSrc: gallery02 },
        { id: 3, imgSrc: gallery03 },
        { id: 4, imgSrc: gallery04 },
        { id: 5, imgSrc: gallery05 },
        { id: 6, imgSrc: gallery06 },
        { id: 7, imgSrc: gallery07 },
        { id: 8, imgSrc: gallery08 },
        { id: 9, imgSrc: gallery09 },
        { id: 10, imgSrc: gallery10 }
    ];

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className="gallery-container-layout">
                <div className="gallery-header">
                    <div className="gallery-header-title">
                        <h4 className="gallery-title">Gallery</h4>
                    </div>
                    <div className="gallery-view">
                        <button className="view-all-btn" onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "View All"}
                        </button>
                    </div>
                </div>

                <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} alt="Full View" />
                    <IoCloseSharp className="close-icon" onClick={() => setModel(false)} />
                </div>

                {/* Image Gallery */}
                <div className="gallery">
                    {GalleryData.slice(0, viewAll ? GalleryData.length : 6).map((item) => (
                        <div className="pics" key={item.id} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={`Gallery Image ${item.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;
