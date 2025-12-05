'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, X, ChevronRight } from 'lucide-react'

// --- Asset Imports ---
import adarsh from './assets/councilPhotos/adarsh.jpg';
import ankit from './assets/councilPhotos/ankit.jpg';
import asmit from './assets/councilPhotos/asmit.jpg';
import avichal from './assets/councilPhotos/avichal.jpg';
import dhruvaraj from './assets/councilPhotos/dhruvaraj.jpg';
import dilip from './assets/councilPhotos/dilip.jpg';
import garvit from './assets/councilPhotos/garvit.jpg';
import koushtubhya from './assets/councilPhotos/Koushtubhya.png';
import lokesh from './assets/councilPhotos/lokesh.jpg';
import mangesh from './assets/councilPhotos/mangesh.jpg';
import mare from './assets/councilPhotos/mare.jpg';
import neel from './assets/councilPhotos/neel.jpg';
import piyush from './assets/councilPhotos/piyush.jpg';
import prince from './assets/councilPhotos/prince.png';
import prithvi from './assets/councilPhotos/prithvi.jpg';
import saumya from './assets/councilPhotos/saumya.jpg';
import shlok from './assets/councilPhotos/shlok.jpg';
import tanmay from './assets/councilPhotos/tanmay.jpg';
import tulsyan from './assets/councilPhotos/tulsyan.jpg';
import prasham from './assets/councilPhotos/prasham.png';
import joshi from './assets/councilPhotos/joshi.png';
import aryan from './assets/councilPhotos/aryan.png';
import priyanshu from './assets/councilPhotos/priyanshu.png';
import jay from './assets/councilPhotos/jay.png';
import aman from './assets/councilPhotos/aman.png';


// --- Data Configuration ---

const leaders = [
  { id: 'gsec', name: 'Priyanshu Chaturvedi', role: 'General Secretary', email: 'gsec@hostel.edu', phone: '+91 89578 18897', description: 'Student representative and lead organiser.', image: priyanshu },
  { id: 'warden', name: 'Aditya Aryan', role: 'Warden Nominee', email: 'warden@hostel.edu', phone: '+91 91980 88385', description: 'Liaises between students and administration.', image: aryan },
];

const rowOneCos = [
  { id: 'sports', name: 'Aman Godara', role: 'Sports Co', email: 'sports@hostel.edu', phone: '+91 93520 02584', description: 'Organises sports events and intramurals.', image: aman },
  { id: 'cult', name: 'Jay Ajinkya', role: 'Cult Co', email: 'cult@hostel.edu', phone: '+91 73851 70384', description: 'Heads cultural activities and performances.', image: jay },
  { id: 'tech', name: 'Mangesh Shimpi', role: 'Tech Co', email: 'tech@hostel.edu', phone: '+91 99601 92245', description: 'Oversees technical infrastructure and event tech.', image: mangesh },
];

const rowTwoCos = [
  { id: 'maint', name: 'Aditya Joshi', role: 'Maint Co', email: 'maint@hostel.edu', phone: '+91 93596 86367', description: 'Responsible for maintenance and repairs.', image: joshi },
  { id: 'mess', name: 'Shlok Agarwal', role: 'Mess Co', email: 'mess@hostel.edu', phone: '+91 91042 18728', description: 'Coordinates mess menu and food-related feedback.', image: shlok },
  { id: 'events', name: 'Prasham Pangtey', role: 'Events Nominee', email: 'events@hostel.edu', phone: '+91 96676 65521', description: 'Nominee for events — supports planning and execution.', image: prasham },
];

const departmentSecys = {
  sports: [
    { name: 'Saumya Yadav', role: 'Sports Secy', image: saumya, email: 'ankit@sports.hostel' },
    { name: 'Prince', role: 'Sports Secy', image: prince, email: 'asmit@sports.hostel' },
    { name: 'Kumar Vijay', role: 'Sports Secy', image: piyush, email: 'piyush@sports.hostel' },
    { name: 'Prithvi Bhardwaj', role: 'Sports Secy', image: prithvi, email: 'piyush@sports.hostel' },
    { name: 'Dilip Karwasra', role: 'Sports Secy', image: dilip, email: 'piyush@sports.hostel' },
    { name: 'Lokesh', role: 'Sports Secy', image: lokesh, email: 'piyush@sports.hostel' },
  ],
  cult: [
    { name: 'Asmit Anand', role: 'Cult Secy', image: asmit, email: 'prince@cult.hostel' },
    { name: 'Koushtubhya Mishra', role: 'Cult Secy', image: koushtubhya, email: 'prithvi@cult.hostel' },
    { name: 'Anmol Gill', role: 'Cult Secy', image: prithvi, email: 'prithvi@cult.hostel' },
  ],
  tech: [
    { name: 'Soham sahoo', role: 'Tech Secy', image: saumya, email: 'saumya@tech.hostel' },
    { name: 'Garvit meena', role: 'Tech Secy', image: garvit, email: 'shlok@tech.hostel' },
  ],
  maint: [
    { name: 'Aryan Mare', role: 'Maint Secy', image: mare, email: 'dilip@maint.hostel' },
    { name: 'Dhruvaraj ', role: 'Maint Secy', image: dhruvaraj, email: 'dilip@maint.hostel' },
    { name: 'Piyush Meena', role: 'Maint Secy', image: piyush, email: 'dilip@maint.hostel' },
    { name: 'Adarsh Singh', role: 'Maint Secy', image: adarsh, email: 'dilip@maint.hostel' },
  ],
  mess: [
    { name: 'Sparsh Tulsyan ', role: 'Mess Secy', image: tulsyan, email: 'mare@mess.hostel' },
    { name: 'Ankit Gomladu', role: 'Mess Secy', image: ankit, email: 'dhruvaraj@mess.hostel' },
    { name: 'Tanmay Kumawat', role: 'Mess Secy', image: tanmay, email: 'dhruvaraj@mess.hostel' },
  ],
  events: [
    { name: 'Neel Patil', role: 'Events Secy', image: neel, email: 'neel@events.hostel' },
  ],
}

// --- Components ---

interface MousePosition {
  x: number;
  y: number;
}

interface Member {
  id?: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  description?: string;
  image: any;
}

const MemberCard = ({ member, isLeader = false, onOpenSecys }: { member: Member; isLeader?: boolean; onOpenSecys: (member: Member) => void }) => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [glowPosition, setGlowPosition] = React.useState<MousePosition>({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to center (0, 0)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    setMousePosition({ x: normalizedX, y: normalizedY });
    setGlowPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={
        isHovering
          ? {
              rotateX: mousePosition.y * 8,
              rotateY: mousePosition.x * -8,
            }
          : {
              rotateX: 0,
              rotateY: 0,
            }
      }
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className={`relative overflow-hidden flex flex-col ${
        isLeader ? 'max-w-md w-full' : 'max-w-sm w-full'
      }`}
    >
      {/* Glassmorphism Background */}
      <div
        className={`absolute inset-0 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 shadow-xl ${
          isLeader ? 'border-t-4 border-t-amber-500' : ''
        }`}
        style={{ zIndex: 1 }}
      />

      {/* Glow Effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(251, 146, 60, 0.15), transparent 80%)`,
            zIndex: 2,
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Header */}
        <div className={`relative w-full ${isLeader ? 'h-80' : 'h-72'} bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 overflow-hidden`}>
          <motion.div
            animate={
              isHovering
                ? { scale: 1.08 }
                : { scale: 1 }
            }
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-full h-full"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain p-2 transition-all duration-500"
              placeholder="blur" 
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88OjpfwAIuQOsC8XrzwAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col items-center text-center">
          <h3 className={`font-serif font-bold text-gray-900 dark:text-white mb-2 ${isLeader ? 'text-2xl' : 'text-xl'}`}>
            {member.name}
          </h3>
          
          {/* Highlighted Role Badge */}
          <motion.div
            animate={isHovering ? { scale: 1.05 } : { scale: 1 }}
            className={`mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800`}
          >
              {member.role}
          </motion.div>

          {/* Contact Links - Full width with text */}
          <div className="w-full space-y-3 mb-6">
            {/* <a 
              href={`mailto:${member.email}`} 
              className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="truncate">{member.email}</span>
            </a> */}
            <motion.a 
              href={`tel:${member.phone}`}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg bg-gray-100/60 dark:bg-gray-700/30 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium group backdrop-blur-sm border border-white/20"
            >
              <motion.div
                animate={isHovering ? { scale: 1.15, rotate: 15 } : { scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </motion.div>
              <span>{member.phone}</span>
            </motion.a>
          </div>

          {/* Button (Only for Cos/Nominees who have secys) */}
          {member.id && departmentSecys[member.id as keyof typeof departmentSecys] && (
            <motion.button
              onClick={() => onOpenSecys(member)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full group flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-white px-4 py-3 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary transition-all backdrop-blur-sm"
            >
              View {member.role.split(' ')[0]} Team
              <motion.div
                animate={isHovering ? { x: 4 } : { x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface Secretary extends Member {
  role: string;
}

const SecretaryModal = ({ isOpen, onClose, data, departmentName }: { isOpen: boolean; onClose: () => void; data: Secretary[] | null; departmentName?: string }) => {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-8 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
            <div>
              <h3 className="text-3xl font-bold font-serif text-gray-900 dark:text-white">
                {departmentName}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-1">Meet the secretaries</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors bg-gray-50 dark:bg-gray-800"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Modal Content (Scrollable) */}
          <div className="p-8 overflow-y-auto bg-gray-50/50 dark:bg-black/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((secy: Secretary, idx: number) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                >
                  {/* Bigger Image for Secretaries */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 dark:border-gray-700 shadow-inner">
                    <Image
                      src={secy.image}
                      alt={secy.name}
                      fill
                      className="object-cover" 
                    />
                  </div>
                  
                  <div className="w-full space-y-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{secy.name}</h4>
                    
                    {/* Highlighted Role Badge for Secys */}
                    <div className="flex justify-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800`}>
                            {secy.role}
                        </span>
                    </div>
{/*                     
                    <div className="pt-4 space-y-2 w-full">
                       <a href={`mailto:${secy.email}`} className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/30 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 transition-colors text-sm">
                          <Mail className="w-4 h-4" />
                          <span className="truncate">{secy.email}</span>
                       </a>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Main Page Component ---

export default function Team() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<Member | null>(null);

  const handleOpenSecys = (member: Member) => {
    setSelectedDept(member);
    setModalOpen(true);
  };

  const closeSecys = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedDept(null), 300);
  };

  return (
    <section id="team" className="py-20 bg-yellow-100 dark:bg-yellow-600 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Meet Our Council
          </h2>
          <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            The dedicated students working behind the scenes to make the hostel a home.
          </p>
        </motion.div>

        {/* --- Layout: Level 1 (Leaders) --- */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {leaders.map((member) => (
            <MemberCard key={member.id} member={member} isLeader={true} onOpenSecys={handleOpenSecys} />
          ))}
        </div>

        {/* --- Layout: Level 2 (First 3 Cos) --- */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {rowOneCos.map((member) => (
            <MemberCard key={member.id} member={member} onOpenSecys={handleOpenSecys} />
          ))}
        </div>

        {/* --- Layout: Level 3 (Second 3 Cos) --- */}
        <div className="flex flex-wrap justify-center gap-8">
          {rowTwoCos.map((member) => (
            <MemberCard key={member.id} member={member} onOpenSecys={handleOpenSecys} />
          ))}
        </div>
      </div>

      {/* Modal for Secretaries */}
      <SecretaryModal
        isOpen={modalOpen}
        onClose={closeSecys}
        data={selectedDept && selectedDept.id ? departmentSecys[selectedDept.id as keyof typeof departmentSecys] : null}
        departmentName={selectedDept ? selectedDept.role : ''}
      />
    </section>
  )
}