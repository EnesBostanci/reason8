import GetInTouch from "@/components/Pages/Contact/GetInTouch"
import Blog from "@/components/UI/Blog"
import { Sekleton } from "@/components/Layout/Sekleton";


export default function page() {
  return (
    <Sekleton >
      <GetInTouch/>
      <Blog/>
    </Sekleton>
  );
}
