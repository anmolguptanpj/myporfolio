import FullscreenImageViewer from "@/components/FullscreenImageViewer";

/* ========= ADMIN IMAGES ========= */
import Admin1 from "@/public/Screenshots/Project 2/Admin1.png";
import Admin2 from "@/public/Screenshots/Project 2/Admin2.png";
import Admin3 from "@/public/Screenshots/Project 2/Admin3.png";
import Admin4 from "@/public/Screenshots/Project 2/Admin4.png";
import Admin5 from "@/public/Screenshots/Project 2/Admin5.png";

/* ========= SUPPLIER IMAGES ========= */
import Supplier1 from "@/public/Screenshots/Project 2/Supplier1.png";
import Supplier2 from "@/public/Screenshots/Project 2/Supplier2.png";
import Supplier3 from "@/public/Screenshots/Project 2/Supplier3.png";
import Supplier4 from "@/public/Screenshots/Project 2/Supplier4.png";
import Supplier5 from "@/public/Screenshots/Project 2/Supplier5.png";
import Supplier6 from "@/public/Screenshots/Project 2/Supplier6.png";
import Supplier7 from "@/public/Screenshots/Project 2/Supplier7.png";
import Supplier8 from "@/public/Screenshots/Project 2/Supplier8.png";
import Supplier9 from "@/public/Screenshots/Project 2/Supplier9.png";
import Supplier10 from "@/public/Screenshots/Project 2/Supplier10.png";
import Supplier11 from "@/public/Screenshots/Project 2/Supplier11.png";
import Supplier12 from "@/public/Screenshots/Project 2/Supplier12.png";
import Supplier13 from "@/public/Screenshots/Project 2/Supplier13.png";

export default function Page() {
  const images = [
    { id: 1, src: Admin1, alt: "Admin 1", description: "" },
    { id: 2, src: Admin2, alt: "Admin 2", description: "" },
    { id: 3, src: Admin3, alt: "Admin 3", description: "" },
    { id: 4, src: Admin4, alt: "Admin 4", description: "" },
    { id: 5, src: Admin5, alt: "Admin 5", description: "" },

    { id: 6, src: Supplier1, alt: "Supplier 1", description: "" },
    { id: 7, src: Supplier2, alt: "Supplier 2", description: "" },
    { id: 8, src: Supplier3, alt: "Supplier 3", description: "" },
    { id: 9, src: Supplier4, alt: "Supplier 4", description: "" },
    { id: 10, src: Supplier5, alt: "Supplier 5", description: "" },
    { id: 11, src: Supplier6, alt: "Supplier 6", description: "" },
    { id: 12, src: Supplier7, alt: "Supplier 7", description: "" },
    { id: 13, src: Supplier8, alt: "Supplier 8", description: "" },
    { id: 14, src: Supplier9, alt: "Supplier 9", description: "" },
    { id: 15, src: Supplier10, alt: "Supplier 10", description: "" },
    { id: 16, src: Supplier11, alt: "Supplier 11", description: "" },
    { id: 17, src: Supplier12, alt: "Supplier 12", description: "" },
    { id: 18, src: Supplier13, alt: "Supplier 13", description: "" },
  ];

  return (
    <div className="w-full h-full">
      <FullscreenImageViewer images={images} />
    </div>
  );
}
