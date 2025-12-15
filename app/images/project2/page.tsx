import FullscreenImageViewer from "@/components/FullscreenImageViewer";



export default function Page() {
  const images = [
    { id: 1, src: "/Screenshots/Project 2/IMG01.png", alt: "Image 1",description:"Customer frontend Home page" },
    { id: 2, src: "/Screenshots/Project 2/IMG02.png", alt: "Image 2",description:"Customer Cart Page" },
    { id: 3, src: "/Screenshots/Project 2/IMG03.png", alt: "Image 3",description:"Customer Payment Page" },
    { id: 4, src: "/Screenshots/Project 2/IMG04.png", alt: "Image 4",description:"Customer Order placed" },
    { id: 5, src: "/Screenshots/Project 2/IMG05.png", alt: "Image 5",description:"Customer order view page" },
    { id: 6, src: "/Screenshots/Project 2/IMG06.png", alt: "Image 6",description:"Customer Order Details Page" },
    { id: 7, src: "/Screenshots/Project 2/IMG07.png", alt: "Image 7",description:"Customer Dashboard"},
    { id: 8, src: "/Screenshots/Project 2/IMG08.png", alt: "Image 8",description:" Supplier Login Page" },
    { id: 9, src: "/Screenshots/Project 2/IMG09.png", alt: "Image 9",description:"Supplier Product list page" },
    { id: 10, src: "/Screenshots/Project 2/IMG10.png", alt: "Image 10",description:"Supplier Product Details Page" },
    { id: 11, src: "/Screenshots/Project 2/IMG11.png", alt: "Image 11",description:"Supplier Product Descriptions" },
    { id: 12, src: "/Screenshots/Project 2/IMG12.png", alt: "Image 12",description:"Supplier Product Descriptions 2" },
    { id: 13, src: "/Screenshots/Project 2/IMG13.png", alt: "Image 13",description:"Supplier Brand Creation Page" },
    { id: 14, src: "/Screenshots/Project 2/IMG14.png", alt: "Image 14",description:"Supplier Category creation Page" },
    { id: 15, src: "/Screenshots/Project 2/IMG15.png", alt: "Image 15",description:"Supplier Products Details edit page 1" },
    { id: 16, src: "/Screenshots/Project 2/IMG16.png", alt: "Image 16",description:"Supplier Product Details edit Page2 " },
    { id: 17, src: "/Screenshots/Project 2/IMG17.png", alt: "Image 17",description:"Supplier Product Details edit Page3 " },
    { id: 18, src: "/Screenshots/Project 2/IMG18.png", alt: "Image 18",description:"Supplier Product Details Redirect Page" },
    { id: 19, src: "/Screenshots/Project 2/IMG19.png", alt: "Image 19",description:"Supplier Product Add images" },
    { id: 20, src: "/Screenshots/Project 2/IMG20.png", alt: "Image 20",description:"Admin Login Page" },
    { id: 21, src: "/Screenshots/Project 2/IMG21.png", alt: "Image 21",description:"Supplier list Page" },
    { id: 22, src: "/Screenshots/Project 2/IMG22.png", alt: "Image 22",description:"Supplier Details Page" },
    { id: 23, src: "/Screenshots/Project 2/IMG23.png", alt: "Image 23",description:"Supplier details edit page" },
    { id: 24, src: "/Screenshots/Project 2/IMG24.png", alt: "Image 24",description:"Supplier Creation Page" },
  ];

  return (
    <div className="w-full h-full">
      <FullscreenImageViewer images={images} />
    </div>
  );
}
