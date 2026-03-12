import { Suspense } from "react";
import ApplyConsultantForm from "@/views/Forms/ApplyConsultantForm";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ApplyConsultantForm />
    </Suspense>
  );
}
