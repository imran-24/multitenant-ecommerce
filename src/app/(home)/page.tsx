import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const HomePage = () => {
  return (
    <div className='flex flex-col space-y-6 p-4'>
      <div>
        <Button variant={"elevated"}>Click me</Button>
      </div>
      <div>
        <Input placeholder='Search...' />
      </div>
      <div>
        <Textarea placeholder='Search...' />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default HomePage;
