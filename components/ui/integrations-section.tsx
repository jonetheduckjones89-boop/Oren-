
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const integrations = [
  { category: "Storage & Documents", items: [
    { name: "Google Drive", logo: "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg", desc: "Seamless patient document sync." },
    { name: "Dropbox", logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg", desc: "Secure cloud file management." },
    { name: "Box", logo: "https://www.vectorlogo.zone/logos/box/box-icon.svg", desc: "Enterprise-grade storage." }
  ]},
  { category: "Communication", items: [
    { name: "Gmail", logo: "https://www.vectorlogo.zone/logos/google_gmail/google_gmail-icon.svg", desc: "Sync patient communications." },
    { name: "Outlook", logo: "https://www.vectorlogo.zone/logos/microsoft_outlook/microsoft_outlook-icon.svg", desc: "Professional clinical mailing." },
    { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg", desc: "Internal team coordination." }
  ]},
  { category: "Productivity", items: [
    { name: "Google Calendar", logo: "https://www.vectorlogo.zone/logos/google_calendar/google_calendar-icon.svg", desc: "Automated appointment booking." },
    { name: "Notion", logo: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg", desc: "Internal wiki & protocols." },
    { name: "Office 365", logo: "https://www.vectorlogo.zone/logos/microsoft_office/microsoft_office-icon.svg", desc: "Complete office suite sync." }
  ]},
  { category: "Clinical Tools", items: [
    { name: "Zoom", logo: "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg", desc: "Integrated telehealth calls." },
    { name: "DrChrono", logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1437113110/i3biv457onp7k4r70xrd.png", desc: "Direct EMR synchronization." },
    { name: "Doxy.me", logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/4a/44/21/4a44214f-37f0-264d-7a6c-941e78696b94/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg", desc: "Simple, secure telemedicine." }
  ]}
];

export function IntegrationsSection() {
  return (
    <section className="py-48 px-6 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-950">THE ECOSYSTEM</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-950 mb-8 font-sans">
            The connective tissue <br/>of clinical data.
          </h2>
          <p className="text-slate-950 text-xl font-medium max-w-2xl mx-auto leading-relaxed tracking-tight">
            Connect your apps and streamline your workflow with native integrations designed for modern medical professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-20">
          {integrations.map((group, i) => (
            <div key={i} className="flex flex-col gap-8">
               <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-950">{group.category}</h4>
               </div>
               <motion.div 
                 className="flex flex-col gap-4"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={staggerContainer}
               >
                 {group.items.map((item, j) => (
                   <motion.div 
                     key={j} 
                     variants={fadeUp}
                     whileHover={{ x: 4 }}
                     className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 group"
                   >
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 transition-colors">
                           <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain" />
                        </div>
                        <h5 className="font-bold text-slate-950 tracking-tight">{item.name}</h5>
                     </div>
                     <p className="text-xs text-slate-950 font-medium leading-relaxed tracking-tight">{item.desc}</p>
                   </motion.div>
                 ))}
               </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
