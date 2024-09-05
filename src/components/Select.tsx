import { Check, ChevronDown } from "lucide-solid";
import { Index } from "solid-js";
import { Select } from "./ui/select";

const items = Array.from({ length: 20 }, (_, index) => ({
    label: `Option ${index + 1}`,
    value: `option-${index + 1}`,
}));


export default function MySelect() {

    return <Select.Root
        positioning={{
            fitViewport: true,
            slide: true,
            overlap: true
        }}
        items={items}
    >
        <Select.Label>Select with many items</Select.Label>
        <Select.Control>
            <Select.Trigger>
                <Select.ValueText />
                <ChevronDown />
            </Select.Trigger>
        </Select.Control>
        <Select.Positioner /* shadow='lg' */ /* overflow='auto' scrollbarWidth='none' borderRadius='2xl' */>
            <Select.Content minW='270px'>
                <Index each={items}>
                    {(item) => (
                        <Select.Item item={item()} gap={4}>
                            <Select.ItemText>
                                {item().label}
                            </Select.ItemText>
                            <Select.ItemIndicator>
                                <Check />
                            </Select.ItemIndicator>
                        </Select.Item>
                    )}
                </Index>
            </Select.Content>
        </Select.Positioner>
    </Select.Root>;
}