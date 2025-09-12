import { BadgeCheckIcon, ClipboardClock, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type FilterType = "all" | "pending" | "done";

interface FilterTagsProps {
  setSelectedFilter: (value: FilterType) => void;
  selectedFilter: FilterType;
}

const filtersOption: { tag: FilterType; name: string }[] = [
  { tag: "all", name: "Todas" },
  { tag: "pending", name: "Pendentes" },
  { tag: "done", name: "Completas" },
];

const FilterTags = ({ setSelectedFilter, selectedFilter }: FilterTagsProps) => {
  return (
    <div className="flex gap-2">
      {filtersOption.map((filter) => (
        <Badge
          key={filter.tag}
          id={filter.tag}
          onClick={() => setSelectedFilter(filter.tag)}
          variant={selectedFilter === filter.tag ? "default" : "outline"}
          className="cursor-pointer"
        >
          {filter.tag === "all" ? (
            <List />
          ) : filter.tag === "pending" ? (
            <ClipboardClock />
          ) : (
            <BadgeCheckIcon />
          )}
          {filter.name}
        </Badge>
      ))}
    </div>
  );
};

export default FilterTags;
