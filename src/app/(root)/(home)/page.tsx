"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon, Calendar, Clock, Video } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* HERO / WELCOME - full width now */}
      <div className="mb-10">
        <div className="rounded-xl p-6 bg-gradient-to-br from-white/60 to-slate-50 dark:from-slate-900/60 dark:to-slate-900/40 border shadow-sm">
          <div className="flex items-start gap-6">
            <div className="rounded-lg p-2 bg-gradient-to-br from-emerald-500 via-teal-700 to-cyan-900 shadow-lg">
              <Video className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900">
                  Welcome back
                </span>
                <span className="text-slate-700 dark:text-slate-200">!</span>
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl">
                {isInterviewer
                  ? "Manage interviews, invite candidates, and run smooth remote sessions."
                  : "See upcoming interviews, join meetings instantly, and review session details."}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setModalType("start");
                    setShowModal(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 text-white shadow-md hover:opacity-95 transition"
                >
                  <Video className="w-4 h-4" />
                  Start Meeting
                </button>

                <button
                  onClick={() => {
                    setModalType("join");
                    setShowModal(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800 hover:shadow-sm transition"
                >
                  <Clock className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                  Join Meeting
                </button>

                <button
                  onClick={() => router.push("/dashboard")}
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTERVIEWS / ACTIONS */}
      {isInterviewer ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Quick actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {QUICK_ACTIONS.map((action) => (
              <div
                key={action.title}
                className="rounded-xl p-4 bg-white/60 dark:bg-slate-900/50 border shadow-sm hover:shadow-md transition"
              >
                <ActionCard action={action} onClick={() => handleQuickAction(action.title)} />
              </div>
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900">
                  Your Interviews
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400">View and join your scheduled interviews</p>
            </div>
          </div>

          <div className="mt-6">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-emerald-500" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <div
                    key={interview._id}
                    className="rounded-xl p-4 border bg-white/60 dark:bg-slate-900/50 shadow-sm hover:shadow-md transition"
                  >
                    <MeetingCard interview={interview} />
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => router.push(`/meet/${interview._id}`)}
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 shadow-md hover:opacity-95 transition"
                      >
                        <Video className="w-4 h-4" />
                        Join
                      </button>

                      <button
                        onClick={() => router.push(`/interview/${interview._id}`)}
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 bg-white/60 hover:shadow-sm transition"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <div className="mb-4">You have no scheduled interviews at the moment</div>
                <button
                  onClick={() => {
                    setModalType("start");
                    setShowModal(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 shadow-md hover:opacity-95 transition"
                >
                  <Video className="w-4 h-4" />
                  Schedule first interview
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
