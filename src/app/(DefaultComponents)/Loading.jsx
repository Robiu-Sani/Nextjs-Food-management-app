import Image from "next/image";
import loader from "../../_images/loading.gif";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Image src={loader} alt="Loader" className="w-[200px] h-[200px]" />
    </div>
  );
}
