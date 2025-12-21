"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../lib/motion';

const apps = [
  { name: "Google Drive", logo: "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg" },
  { name: "Dropbox", logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" },
  { name: "Box", logo: "https://www.vectorlogo.zone/logos/box/box-icon.svg" },
  { name: "Gmail", logo: "https://www.vectorlogo.zone/logos/google_gmail/google_gmail-icon.svg" },
  { name: "Outlook", logo: "https://www.vectorlogo.zone/logos/microsoft_outlook/microsoft_outlook-icon.svg" },
  { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
  { name: "Calendar", logo: "https://www.vectorlogo.zone/logos/google_calendar/google_calendar-icon.svg" },
  { name: "Notion", logo: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" },
  { name: "Office 365", logo: "https://www.vectorlogo.zone/logos/microsoft_office/microsoft_office-icon.svg" },
  { name: "Zoom", logo: "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" },
  { name: "DrChrono", logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1437113110/i3biv457onp7k4r70xrd.png" },
  { name: "Doxy.me", logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/4a/44/21/4a44214f-37f0-264d-7a6c-941e78696b94/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" }
];

export function IntegrationsIcons() {
  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Connectivity</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-950 mb-6 leading-tight">
            Native integrations.
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto tracking-tight">
            Built for clinical interoperability. Sync data across the systems your team uses every day.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {apps.map((app, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center transition-all duration-500 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:border-slate-300 shadow-sm">
                <img 
                  src={app.logo} 
                  alt={app.name} 
                  className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-950 transition-colors whitespace-nowrap">
                {app.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}