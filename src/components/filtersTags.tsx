import { BadgeCheckIcon, ClipboardClock, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FilterTagsProps {
  setSelectedFilter: (value: string) => void;
  selectedFilter: string;
  id: string;
  name: string;
}

const FilterTags = ({
  setSelectedFilter,
  selectedFilter,
  id,
  name,
}: FilterTagsProps) => {
  return (
    <Badge
      id={id}
      onClick={() => setSelectedFilter(id)}
      variant={selectedFilter === id ? "default" : "outline"}
      className="cursor-pointer"
    >
      {id === "all" ? (
        <List />
      ) : id === "pending" ? (
        <ClipboardClock />
      ) : (
        <BadgeCheckIcon />
      )}
      {name}
    </Badge>
  );
};

export default FilterTags;
