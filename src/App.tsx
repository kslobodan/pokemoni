import { ComponentProps, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import { useTheme } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { cn } from "./lib/utils";

const CodeText = (props: ComponentProps<"span">) => {
  return (
    <span
      {...props}
      className={cn(
        props.className,
        "bg-muted text-muted-foreground rounded font-mono text-sm p-1"
      )}
    />
  );
};

function App() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();
  return (
    <header className="h-screen flex items-center py-8 container">
      <div className="w-full grid grid-cols-2 gap-4 content-start items-center justify-center">
        <div className="col-span-2">
          <div className="text-4xl font-bold">Shadcn CRA Starter</div>
          <div className="text-lg text-muted-foreground">
            The advantages of Create-React-App and Shadcn UI, all in one place
          </div>
        </div>
        <Card className="h-72">
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>Adding Components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-muted-foreground text-sm">
              Step 1: Use the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ui.shadcn.com/docs/cli"
                className="underline"
              >
                Shadcn-UI CLI Tool
              </a>
            </div>
            <div className="text-sm p-2 rounded border bg-muted text-muted-foreground">
              <p className="font-mono">npx shadcn-ui@latest add button</p>
            </div>
            <div className="text-muted-foreground text-sm">
              Step 2: Use it !
            </div>
            <Button
              variant="outline"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </Button>
          </CardContent>
        </Card>
      </div>
    </header>
  );
}

export default App;
