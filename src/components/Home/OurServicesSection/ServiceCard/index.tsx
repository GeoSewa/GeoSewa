import { FlexColumn } from "@Components/common/Layouts";
import Image from "@Components/RadixComponents/Image";

interface IServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  title,
  description,
}: IServiceCardProps) {
  return (
    <FlexColumn
      gap={2}
      className=" naxatw-p-4 naxatw-bg-white naxatw-rounded-xl naxatw-border naxatw-shadow-lg"
    >
      <Image src={image} width={60} />
      <h4 className="naxatw-text-gray-800">{title}</h4>
      <p>{description}</p>
    </FlexColumn>
  );
}
