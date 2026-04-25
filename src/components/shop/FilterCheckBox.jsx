"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

const FilterCheckBox = (props) => {
  return (
    <FieldGroup className="w-full py-2 cursor-pointer!">
      <Field orientation="horizontal">
        <Checkbox
          id={props?.name}
          checked={props.checked}
          onCheckedChange={props.onChange}
          className="scale-125"
        />
        <Label htmlFor={props?.name} className="text-lg w-full cursor-pointer">
          <span className="w-full block">{props?.name}</span>
          <span className="block">({props.count})</span>
        </Label>
      </Field>
    </FieldGroup>
  );
};

export default FilterCheckBox;
