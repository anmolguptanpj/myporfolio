import FullscreenImageViewer from "@/components/FullscreenImageViewer";



export default function Page() {
  const images = [
    { id: 1, src: "/Screenshots/Project 1/IMG01.png", alt: "Image 1",description:"Login Page" },
    { id: 2, src: "/Screenshots/Project 1/IMG02.png", alt: "Image 2",description:"Main Todo home page" },
    { id: 3, src: "/Screenshots/Project 1/IMG03.png", alt: "Image 3",description:"Signup Page" },
    { id: 4, src: "/Screenshots/Project 1/IMG04.png", alt: "Image 4",description:"Forgot Password Page" },
    { id: 5, src: "/Screenshots/Project 1/IMG05.png", alt: "Image 5",description:"Sent OTP Page" },
    { id: 6, src: "/Screenshots/Project 1/IMG06.png", alt: "Image 6",description:"OTP recieved" },
    { id: 7, src: "/Screenshots/Project 1/IMG07.png", alt: "Image 7",description:"Password Change Page" },
    { id: 8, src: "/Screenshots/Project 1/IMG08.png", alt: "Image 8",description:"Mobile Signup page view" },
    { id: 9, src: "/Screenshots/Project 1/IMG09.png", alt: "Image 9",description:"Mobile todo Page" },
    { id: 10, src: "/Screenshots/Project 1/IMG10.png", alt: "Image 10",description:" Mobile Login Page" },
  ];

  return (
    <div className="w-full h-full">
      <FullscreenImageViewer images={images} />
    </div>
  );
}
