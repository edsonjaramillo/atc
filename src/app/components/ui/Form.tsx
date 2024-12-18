import { cn } from '@/app/lib/ui/tw';

type FormProperties = React.ComponentProps<'form'>;
export function Form({ children, className, ...properties }: FormProperties) {
  return (
    <form className={cn('space-y-4 accent-primary', className)} noValidate {...properties}>
      {children}
    </form>
  );
}
