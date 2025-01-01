import React from "react";
import { Button } from "../ui/button";
import DropDown from "../icons/DropDown";
import Save from "../icons/Save";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { deleteCollection } from "@/utils/api/deleteCollection";
import toast from "react-hot-toast";

interface Collection {
  item: {
    title: string;
    products: Product[];
    id: number;
  };
  refetch: () => void;
}
const Favorites: React.FC<Collection> = ({ item, refetch }) => {
  return (
    <div className="bg-lightBlueGray border rounded-md">
      <div className="flex justify-between text-customGray p-4">
        <div className="flex flex-col">
          <p className="max-md:text-xs">{item.title}</p>
          <div className="flex">
            <p className="max-md:text-xs">لیست عمومی</p>
            <span className="flex mx-7 items-center max-md:mx-2 max-md:text-xs">
             
              <i className="text-aquaBlue">
             
                <Save />
              </i>
              <i className="mx-1">{item?.products?.length}</i>
            </span>
          </div>
        </div>
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {" "}
              <DropDown />{" "}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem
              onClick={() => {
                deleteCollection(item.id).then((res) => {
                  if (res.success) {
                    toast.success("با موفقیت حذف شد");

                    refetch();
                  } else {
                    toast.error("مشکلی پیش آمد لطفا مجدد تلاش کنید");
                  }
                });
              }}
            >
              حذف
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-1">
        {item?.products?.map((data) => (
          <img
            key={data.id}
            className="w-[148px] h-[148px] max-md:h-[79px] max-md:w-[79px]"
            src={data.media_files[0].main_link}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
