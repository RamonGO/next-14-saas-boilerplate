import Image from "next/image";

const NotFound = ({ message }: { message: string }) => {
  return (
    <div className="flex h-32">
      <div className="flex mx-auto  text-center flex-col space-y-3">
        <Image
          width={180}
          height={180}
          src="/assets/img/not_found.png"
          className="w-full mx-auto h-full object-cover"
          alt="Not found"
        />
        <span className="text-subtitle mx-auto">{message}</span>
      </div>
    </div>
  );
};

export default NotFound;
