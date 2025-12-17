"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="group w-full sm:w-auto shrink-0">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Subscribing...
        </>
      ) : (
        <>
          Get Early Access
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export function EmailCaptureForm() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="mt-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full">
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="h-12 text-base border-foreground/30"
                aria-label="Email address"
            />
        </div>
        {/* Honeypot field for spam protection */}
        <input type="text" name="honeypot" className="sr-only" aria-hidden="true" tabIndex={-1} />
        <SubmitButton />
      </div>
      {/* Inline error message for accessibility */}
       {state.message && !state.success && (
         <p className="mt-2 text-sm text-destructive">{state.message}</p>
      )}
    </form>
  );
}
