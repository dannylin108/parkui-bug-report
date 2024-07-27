

import { Index } from 'solid-js/web'
import { Select, NumberInput } from '~/components/ui'
import { createSignal } from 'solid-js';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-solid';
import { VStack } from 'styled-system/jsx';

const itemsBase = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
];

const Basic = () => {

    const [number, setNumber] = createSignal(0);

    const items = () => itemsBase.map((item) => ({ ...item, label: `${item.label}-${number()}` }));

    return <VStack gap='6' alignItems='flex-start'>
        <NumberInput value={`${number()}`} onValueChange={(v) => {
            setNumber(v.valueAsNumber);
        }}>Number</NumberInput>
        <Select.Root positioning={{ sameWidth: true }} width="2xs" items={items()}>
            <Select.Label>Framework</Select.Label>
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Select a Framework" />
                    <ChevronsUpDownIcon />
                </Select.Trigger>
            </Select.Control>
            <Select.Positioner>
                <Select.Content>
                    <Select.ItemGroup>
                        <Select.ItemGroupLabel>Framework</Select.ItemGroupLabel>
                        <Index each={items()}>
                            {(item) => (
                                <Select.Item item={item()}>
                                    <Select.ItemText>{item().label}</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            )}
                        </Index>
                    </Select.ItemGroup>
                </Select.Content>
            </Select.Positioner>
        </Select.Root>
    </VStack>
}

export default Basic;