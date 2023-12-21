import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';

export default function Splash() {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <h1 className="text-3xl">moarpls</h1>
      </div>
      
      <div className="flex justify-center items-center w-3/5 bg-white mt-10 flex-col">
        <div className="mb-2 block">
          <Label htmlFor="large" value="Large input" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
    </>
  )
}