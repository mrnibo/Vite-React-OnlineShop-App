import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Product {
  title: string;
  img: string;
  price: string;
}

interface DeCardProps {
  className?: string;
  onClick: () => void;
  productList: Product[];
  limit?: number;
}

export const DeCard: React.FC<DeCardProps> = ({
  productList,
  className,
  onClick,
  limit,
}) => {
  return (
    <div className={`${className} gap-2 grid grid-cols-2 sm:grid-cols-4`}>
      {productList
        .slice(0, limit || productList.length) // Slice the productList based on the limit
        .map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={onClick}
            className="mr-4"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};
