
import Image from "next/image"
export default function Gallery() {


    return (
        <>
            <div className="py-20 text-center bg-slate-900 px-5">

                <div className="container mx-auto ">
                    <h1 className="heading  font-medium text-center px-14 lg:text-6xl text-4xl text-white font-mono">Community <span >& Event  <br /> Gallery</span></h1>
                    <div className="gallery flex flex-wrap -m-4 self-center">
                        <div className="gallery-item">
                            <Image className="gallery-image" src="/gallery/IMG20220817171748.jpg" width={600} height={600} layout="responsive" alt="Gallery" />
                        </div>
                        <div className="gallery-item">
                            <Image className="gallery-image" src="/gallery/IMG20220817171838.jpg" width={500} height={500} alt="Gallery" />
                        </div>
                        <div className="gallery-item">
                            <Image className="gallery-image" src="/gallery/IMG20220926161333.jpg" width={500} height={500} alt="Gallery" />
                        </div>
                        <div className="gallery-item">
                            <Image className="gallery-image" src="/gallery/IMG_20220926_135939.jpg" width={500} height={500} alt="Gallery" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}