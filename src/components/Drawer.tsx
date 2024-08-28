
import { XIcon } from 'lucide-solid'
import { Button } from '~/components/ui/button'
import { Drawer } from '~/components/ui/drawer'
import { IconButton } from '~/components/ui/icon-button'
import DatePicker from './DatePicker'
import Dialog from './Dialog';
import { Stack } from 'styled-system/jsx'

export default function MyDrawer(){
    return (
        <Drawer.Root variant='left'>
            <Drawer.Trigger
                asChild={(triggerProps) => <Button {...triggerProps()}>Open Drawer</Button>}
            />
            <Drawer.Backdrop />
            <Drawer.Positioner variant='left'>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Title</Drawer.Title>
                        <Drawer.Description>Description</Drawer.Description>
                        <Drawer.CloseTrigger
                            asChild={(closeProps) => (
                                <IconButton
                                    {...closeProps()}
                                    variant="ghost"
                                    style={{ position: 'absolute', top: '20px', right: '16px' }}
                                >
                                    <XIcon />
                                </IconButton>
                            )}
                        />
                    </Drawer.Header>
                    <Drawer.Body>
                        <Stack gap='12'>
                            <DatePicker />
                            <Dialog />
                        </Stack>
                    </Drawer.Body>
                    <Drawer.Footer gap="3">
                        <Drawer.CloseTrigger
                            asChild={(closeProps) => (
                                <Button {...closeProps()} variant="outline">
                                    Cancel
                                </Button>
                            )}
                        />
                        <Button>Primary</Button>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}
