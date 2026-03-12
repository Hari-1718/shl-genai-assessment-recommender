import { Suspense } from "react";
import JoinUs from "@/views/JoinUs";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <JoinUs />
    </Suspense>
  );
}
