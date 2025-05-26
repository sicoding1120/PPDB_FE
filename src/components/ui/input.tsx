<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
=======
import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  const [value, setValue] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (!value) {
      setIsInvalid(false);
      setErrorMessage("");
      return;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const valid = emailRegex.test(value);
      setIsInvalid(!valid);
      setErrorMessage(valid ? "" : "Format email tidak valid.");
    }

    if (type === "password") {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
      const valid = passwordRegex.test(value);
      setIsInvalid(!valid);
      setErrorMessage(valid ? "" : "Password harus lebih dari 5 karakter dan mengandung huruf serta angka.");
    }
  }, [value, type]);

  return (
    <div className="w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          isInvalid && "border-destructive ring-destructive/20 dark:ring-destructive/40",
          className
        )}
        aria-invalid={isInvalid}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
        {...props}
      />
      {isInvalid && (
        <p className="mt-1 text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export { Input };
>>>>>>> df49f9003e1ae470553e615900cf0afae65aa87e
