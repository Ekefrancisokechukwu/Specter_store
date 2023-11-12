import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sorts = ["a-z", "z-a", "high", "low"];

const Sort = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] capitalize">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sorts.map((sort) => {
          return (
            <SelectItem key={sort} value={sort} className="capitalize">
              {sort}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
export default Sort;
