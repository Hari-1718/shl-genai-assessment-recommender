import { Suspense } from "react";
import ScheduleConsultationForm from "@/views/Forms/ScheduleConsultationForm";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ScheduleConsultationForm />
    </Suspense>
  );
}
