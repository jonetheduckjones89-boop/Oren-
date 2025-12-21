import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Layers,
  UserCheck,
  Activity,
  FileText,
  Mail,
  Calendar,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const TimelineMockup = () => (
  <div className="w-full h-full bg-[#f4f7f9] p-4 flex items-center justify-center">
    <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl border border-slate-200/50 overflow-hidden flex flex-col h-[90%]">
      <div className="flex items-center gap-1.5 p-3 border-b border-slate-100">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="p-6 flex-1 overflow-hidden">
        <h4 className="text-[16px] font-bold text-slate-900 mb-6">Unified Clinical Timeline</h4>
        <div className="space-y-4 relative">
          <div className="absolute left-[20px] top-5 bottom-5 w-px bg-slate-100" />

          <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-semibold text-slate-700 truncate">Email: Patient Intake – Demo</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">10:05 AM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-semibold text-slate-700 truncate">Patient Check-in – Jane Doe</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">10:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DocumentMockup = () => (
  <div className="w-full h-full bg-[#f4f7f9] p-4 flex items-center justify-center">
    <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200/50 overflow-hidden flex flex-col h-[90%]">
      <div className="p-4 flex justify-between items-center border-b border-slate-100 bg-white">
        <h4 className="text-[14px] font-bold text-slate-900">Unified Healthcare Documents</h4>
        <MoreVertical className="w-5 h-5 text-slate-300" />
      </div>
      <div className="p-6 overflow-x-auto bg-white flex-1">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-slate-400 font-semibold border-b border-slate-100">
              <th className="text-left pb-3 font-bold uppercase tracking-wider">Name</th>
              <th className="text-left pb-3 px-3 font-bold uppercase tracking-wider">Source</th>
              <th className="text-right pb-3 font-bold uppercase tracking-wider">Synced</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {[
              { name: "Patient_Records_Q1.pdf", src: "Drive", date: "2024-05-10" },
              { name: "Lab_Results_March.xlsx", src: "Dropbox", date: "2024-05-09" },
              { name: "Annual_Checkup.docx", src: "OneDrive", date: "2024-05-08" },
            ].map((doc, idx) => (
              <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="py-3 flex items-center gap-3 pr-2">
                  <FileText className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="truncate max-w-[120px] font-medium text-[12px]">{doc.name}</span>
                </td>
                <td className="py-3 px-3 text-slate-500 font-medium">{doc.src}</td>
                <td className="py-3 text-right font-bold text-slate-950 text-[10px] whitespace-nowrap">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ExtractionMockup = () => (
  <div className="w-full h-full bg-[#f4f7f9] p-4 flex items-center justify-center">
    <div className="w-full max-w-sm bg-white rounded-[1.5rem] shadow-2xl border border-slate-200/50 overflow-hidden p-8 flex flex-col gap-6">
      <div className="bg-emerald-600 text-white rounded-xl p-4 flex items-center gap-4 shadow-lg shadow-emerald-600/20">
        <CheckCircle2 className="w-6 h-6 shrink-0" />
        <span className="text-[16px] font-bold tracking-tight">Processing Complete</span>
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <FileText className="w-5 h-5 text-slate-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-slate-900 truncate">Patient Record Updated:</div>
            <div className="text-[11px] text-slate-500 font-medium truncate">Sarah L.</div>
          </div>
        </div>
        <div className="space-y-3 pt-1">
          {[
            { label: "Document Type", value: "Lab Results" },
            { label: "Extraction", value: "Hemoglobin, WBC" },
          ].map((field, i) => (
            <div key={i} className="flex justify-between items-start py-2.5 border-b border-slate-50 last:border-0">
              <span className="text-[11px] font-medium text-slate-400 shrink-0">{field.label}</span>
              <span className="text-[11px] font-bold text-slate-900 text-right pl-4">{field.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AppointmentMockup = () => (
  <div className="w-full h-full bg-[#f4f7f9] p-4 flex items-center justify-center">
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200/50 overflow-hidden flex flex-col h-[90%]">
      <div className="flex-1 grid grid-cols-5 h-full">
        <div className="col-span-3 bg-slate-50 p-8 flex flex-col items-center justify-center gap-6 border-r border-slate-100">
          <div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-inner">
            <UserCheck className="w-12 h-12 text-slate-400" />
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center leading-tight">Active Protocol <br />Session</div>
        </div>
        <div className="col-span-2 p-6 flex flex-col gap-6 bg-white">
          <div className="text-[9px] font-bold text-slate-950 uppercase tracking-[0.2em]">Live Session</div>
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Patient</div>
              <div className="text-[12px] font-bold text-slate-900">Jane Doe</div>
            </div>
          </div>
          <div className="mt-auto space-y-2">
            <div className="h-1.5 w-full bg-slate-100 rounded-full" />
            <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const featureData = [
  {
    icon: Database,
    title: "Clinical Intelligence.",
    description: "Centralized management of medical records and operational data pipelines.",
    badge: "CORE",
    mockup: <ExtractionMockup />
  },
  {
    icon: UserCheck,
    title: "Autonomous Agents.",
    description: "Trained agents for deterministic handling of patient intake and triage flows.",
    badge: "AUTONOMY",
    mockup: <AppointmentMockup />
  },
  {
    icon: Layers,
    title: "Infrastructure Sync.",
    description: "Direct bridges between EMRs and clinical applications for data consistency.",
    badge: "SYNC",
    mockup: <TimelineMockup />
  },
  {
    icon: Activity,
    title: "System Performance.",
    description: "High-throughput systems optimized to reduce administrative documentation latency.",
    badge: "VELOCITY",
    mockup: <DocumentMockup />
  }
];

export function FeatureBlocks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featureData.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col rounded-[2.5rem] bg-white border border-slate-200/60 overflow-hidden transition-all duration-500 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-100"
            >
              <div className="p-10 pb-0">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-48 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-all shadow-sm">
                    <f.icon className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase pt-3">
                    {f.badge}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-slate-950 leading-tight mb-4">{f.title}</h3>
                <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed max-w-lg mb-8 tracking-tight">
                  {f.description}
                </p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-slate-100 transition-all duration-700 group-hover:border-slate-200 group-hover:-translate-y-2 shadow-sm group-hover:shadow-xl">
                  {f.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
