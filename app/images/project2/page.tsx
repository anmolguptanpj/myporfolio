import FullscreenImageViewer from "@/components/FullscreenImageViewer";



export default function Page() {
  const images = [
    { id: 1, src: "/Screenshots/Project 2/IMG01.png", alt: "Image 1" },
    { id: 2, src: "/Screenshots/Project 2/IMG02.png", alt: "Image 2" },
    { id: 3, src: "/Screenshots/Project 2/IMG03.png", alt: "Image 3" },
    { id: 4, src: "/Screenshots/Project 2/IMG04.png", alt: "Image 4" },
    { id: 5, src: "/Screenshots/Project 2/IMG05.png", alt: "Image 5" },
    { id: 6, src: "/Screenshots/Project 2/IMG06.png", alt: "Image 6" },
    { id: 7, src: "/Screenshots/Project 2/IMG07.png", alt: "Image 7" },
    { id: 8, src: "/Screenshots/Project 2/IMG08.png", alt: "Image 8" },
    { id: 9, src: "/Screenshots/Project 2/IMG09.png", alt: "Image 9" },
    { id: 10, src: "/Screenshots/Project 2/IMG10.png", alt: "Image 10" },
    { id: 11, src: "/Screenshots/Project 2/IMG11.png", alt: "Image 11" },
    { id: 12, src: "/Screenshots/Project 2/IMG12.png", alt: "Image 12" },
    { id: 13, src: "/Screenshots/Project 2/IMG13.png", alt: "Image 13" },
    { id: 14, src: "/Screenshots/Project 2/IMG14.png", alt: "Image 14" },
    { id: 15, src: "/Screenshots/Project 2/IMG15.png", alt: "Image 15" },
    { id: 16, src: "/Screenshots/Project 2/IMG16.png", alt: "Image 16" },
    { id: 17, src: "/Screenshots/Project 2/IMG17.png", alt: "Image 17" },
    { id: 18, src: "/Screenshots/Project 2/IMG18.png", alt: "Image 18" },
    { id: 19, src: "/Screenshots/Project 2/IMG19.png", alt: "Image 19" },
    { id: 20, src: "/Screenshots/Project 2/IMG20.png", alt: "Image 20" },
    { id: 21, src: "/Screenshots/Project 2/IMG21.png", alt: "Image 21" },
    { id: 22, src: "/Screenshots/Project 2/IMG22.png", alt: "Image 22" },
    { id: 23, src: "/Screenshots/Project 2/IMG23.png", alt: "Image 23" },
    { id: 24, src: "/Screenshots/Project 2/IMG24.png", alt: "Image 24" },
  ];

  return (
    <div className="w-full h-full">
      <FullscreenImageViewer images={images} />
    </div>
  );
}
