import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Example datasets
// Units dataset: each unit has a UnitName and ResporgID
const unitsData = [
  { unit: "Unit 1", resporgId: 4 },
  { unit: "Unit 2", resporgId: 4 },
  { unit: "Unit 3", resporgId: 4 },
  { unit: "Unit 4", resporgId: 2 },
];

// Resporg dataset: each resporg has an ID and Name
const resporgData = [
  { resporgId: 4, name: "Resporg 4" },
  { resporgId: 2, name: "Resporg 2" },
];

// Merge/join units into their resporg groups
const data = resporgData.map((r) => ({
  resporgId: r.resporgId,
  resporg: r.name,
  units: unitsData.filter((u) => u.resporgId === r.resporgId).map((u) => u.unit),
}));

export default function ResporgUnitDropdown() {
  const [openResporgs, setOpenResporgs] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleResporg = (resporg) => {
    setOpenResporgs((prev) => ({ ...prev, [resporg]: !prev[resporg] }));
  };

  const toggleCheckbox = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow">
      {data.map(({ resporg, units }) => {
        const isOpen = openResporgs[resporg];
        return (
          <div key={resporg} className="mb-2 border-b pb-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleResporg(resporg)}>
              <div className="flex items-center space-x-2">
                <Checkbox checked={!!checkedItems[resporg]} onCheckedChange={() => toggleCheckbox(resporg)} />
                <span className="font-medium text-lg">{resporg}</span>
                <span className="text-sm text-gray-500">({units.length})</span>
              </div>
              {isOpen ? <ChevronDown /> : <ChevronRight />}
            </div>

            {isOpen && (
              <div className="ml-8 mt-2 space-y-1">
                {units.map((unit) => (
                  <div key={unit} className="flex items-center space-x-2">
                    <Checkbox checked={!!checkedItems[unit]} onCheckedChange={() => toggleCheckbox(unit)} />
                    <span>{unit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
