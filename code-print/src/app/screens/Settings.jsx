import { Input, Slider, Stack } from "@mui/joy"
import { useState } from "react"

export default function Settings() {
    const [font, setFont] = useState({
        size: 18
    })
    const handleFontSizeChange = ({ e, newValue }) => {
        setFont({ size: newValue })
    }
    return (
        <div className="p-2 h-full w-full flex flex-col">
            <Stack spacing={2}>
                <Label text="Settings" size={15} />
                {/* <div className="w-full" /> */}
                <Label text="Font Size" size={10} />
                {/* <Input value={font.size} size="xs" variant="soft" sx={{ background: '#424242', color: 'white', padding: 1 }} onChange={e => setFont({ size: e.target.value })} /> */}
                <Slider
                    color="neutral"
                    marks
                    size="sm"
                    valueLabelDisplay="auto" // Display the current value of the slider
                    variant="outlined"
                    value={font.size}
                    onChange={handleFontSizeChange} // Attach the handler
                    step={1}
                    min={10} // Optional: Set minimum value
                    max={50} // Optional: Set maximum value

                />
            </Stack>

        </div>
    )
}

const Label = ({ text, size }) => {
    return (
        <p className="text-white" style={{ fontSize: size }}>{text}</p>
    )
}