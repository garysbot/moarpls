import {
  Button,
  Label,
  TextInput,
  Card,
  // Checkbox,
  // FileInput,
  // Radio,
  // RangeSlider,
  // Select,
  // Textarea,
  // ToggleSwitch,
} from 'flowbite-react';

export default function Splash() {
  return (
    <div className="flex justify-center items-center mt-6 flex-col gap-2">
      <h1 className="text-6xl font-bold">moarpls</h1>
      <h2>A ChatGPT Meme Generator</h2>

      <div className="flex justify-center items-center w-3/5 mt-10 flex-col">
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <Label htmlFor="large" value="Noun" className="text-white" />
          <TextInput id="large" type="text" sizing="lg" placeholder="Cute dog" />
        </div>
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <Label htmlFor="large" value="Adjective" className="text-white" />
          <TextInput id="large" type="text" sizing="lg" placeholder="Growling..." />
        </div>
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <Button outline gradientDuoTone="pinkToOrange">Generate Meme</Button>
        </div>
      </div>

      <div className="flex justify-center items-center w-3/5 mt-10 flex-col">
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl">Result</h1>
        </div>
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <Card
            className="max-w-l text-black"
            imgAlt="result"
            imgSrc="/samples/sample1.png"
          >
            <p className="font-normal text-gray-700 dark:text-gray-400 flex items-center justify-center">
              Here are the results of &quot;NOUN&quot; and &quot;ADJECTIVE&quot;.
            </p>
            <Button size="sm" outline gradientDuoTone="pinkToOrange">moarpls</Button>
          </Card>
        </div>
      </div>

    </div>
  );
}
