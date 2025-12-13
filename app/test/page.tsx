import FullscreenImageViewer from "@/components/FullscreenImageViewer";
import screenshot from "@/public/Screenshots/Project 2/Screenshot 2025-12-13 210515.png"

export default function Page() {
    const images = [
        {id:1,src:screenshot}
    ]
    return (
        <div>
            <FullscreenImageViewer images={images}/>
        </div>
    );
}