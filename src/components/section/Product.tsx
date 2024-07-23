import React, { useState } from "react";
import { DeCard } from "../ui/DeCard";
import { productList } from "@/config/product";
import { DeTitle } from "@/components/ui/DeTitle";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaExternalLinkAlt, FaFilter } from "react-icons/fa";

const Product: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [limit, setLimit] = useState<number>(4);

  const handleFilterChange = (key: string) => {
    setFilter(key);
  };

  const sortedProducts = [...productList].sort((a, b) => {
    switch (filter) {
      case "low-to-high":
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      case "high-to-low":
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      case "best-price":
        // Assuming best price logic is same as low-to-high for simplicity
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      default:
        return 0;
    }
  });

  return (
    <div className="py-16">
      <DeTitle size="sm" className="mb-8">
        Products
      </DeTitle>

      <div className="flex justify-between items-center mb-8">
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-gray-200">
              <FaFilter />
              Filter
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            selectionMode="single"
            onAction={(key) => handleFilterChange(key as string)}
          >
            <DropdownItem key="low-to-high">Price: Low to High</DropdownItem>
            <DropdownItem key="high-to-low">Price: High to Low</DropdownItem>
            <DropdownItem key="best-price">Best Price</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <DeCard
        productList={sortedProducts}
        limit={limit}
        onClick={() => console.log("click")}
      />

      <div className="flex justify-center items-center">
        {limit < productList.length && (
          <Button
            onClick={() =>
              limit + 4 <= productList.length
                ? setLimit(limit + 4)
                : setLimit(productList.length)
            }
            className="mt-8 bg-gray-100 rounded-full px-10 py-6 text-black"
            color="default"
          >
            <FaExternalLinkAlt />
            See More ...
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
