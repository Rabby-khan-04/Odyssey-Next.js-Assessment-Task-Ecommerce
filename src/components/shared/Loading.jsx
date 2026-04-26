import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <section className="h-screen absolute z-50 inset-0 w-full flex items-center justify-center bg-background">
      <Spinner className="size-8" />
    </section>
  );
};

export default Loading;
