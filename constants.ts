import { Institution, InstitutionCategory } from './types';

export const INSTITUTIONS: Institution[] = [
  {
    id: 'pharmacy',
    name: 'Karnataka College of Pharmacy',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Innovation in Pharmaceutical Sciences',
    overview: 'Karnataka College of Pharmacy is one of the leading institutions for pharmacy studies in India. We offer a range of programs from diplomas to doctorates, focusing on drug research and medicine.',
    courses: [
      { name: 'D.Pharm' },
      { name: 'B.Pharm' },
      { name: 'M.Pharm' },
      { name: 'Pharm D' },
      { name: 'Ph.D in Pharmacy' }
    ],
    whyChoose: [
      'CPCSEA approved animal house for research',
      'Advanced research labs for drug formulation',
      'Medicinal garden for pharmacognosy studies',
      'Partnerships with top pharmaceutical companies',
      'High placement record in research and production'
    ],
    departments: ['Pharmaceutics', 'Pharmacology', 'Pharmaceutical Chemistry', 'Pharmacy Practice'],
    faculty: [],
    facilities: ['Medicinal Garden', 'Analytical Lab', 'Research Center'],
    admissions: 'Admission based on KCET/NEET or academic merit.',
    placements: ['Pfizer', 'Biocon', 'Sun Pharma', 'Cipla'],
    gallery: [],
    contact: { address: 'Hegde Nagar, Bengaluru', phone: '080808 33000', email: 'pharmacy@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1769757265/kcp2_uzanov.png'
  },
  {
    id: 'nursing',
    name: 'Karnataka College of Nursing',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Excellence in Healthcare and Compassionate Care',
    overview: 'Karnataka College of Nursing aims to develop skilled healthcare professionals. We provide rigorous clinical training and a compassionate approach to patient care.',
    courses: [
      { name: 'GNM' },
      { name: 'B.Sc Nursing' },
      { name: 'P.B B.Sc Nursing' },
      { name: 'M.Sc Nursing' },
      { name: 'Ph.D in Nursing' }
    ],
    whyChoose: [
      'Clinical postings in major hospitals in Bengaluru',
      'Simulated nursing labs for practical learning',
      'Experienced nursing faculty and healthcare mentors',
      'High demand for graduates in India and abroad',
      'Focus on community health and emergency care'
    ],
    departments: ['Nursing Education'],
    faculty: [],
    facilities: ['Anatomy Lab', 'Nursing Practice Suite', 'Hostel for Girls'],
    admissions: 'Admission based on merit and counseling.',
    placements: ['Apollo Hospitals', 'Manipal Hospitals', 'Fortis', 'Global Health Centers'],
    gallery: [],
    contact: { address: 'Bengaluru', phone: '080808 33000', email: 'nursing@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1769756824/kcn_otgpow.png'
  },
  {
    id: 'management-science',
    name: 'Karnataka College of Management & Science',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Empowering Future Leaders in Technology and Commerce',
    overview: 'Karnataka College of Management and Science provides a modern learning environment for students interested in business and technology. We focus on teaching skills that help students succeed in the global job market.',
    courses: [
      { name: 'B.Com' },
      { name: 'BBA' },
      { name: 'BBA Aviation Management' },
      { name: 'BCA' },
      { name: 'BCA Artificial Intelligence & Machine Learning' },
      { name: 'BCA Digital Forensic Data Science' },
      { name: 'BTTM' },
      { name: 'M.Com' },
      { name: 'MTTM' }
    ],
    specialCourses: [
      'BCA Cloud Computing and Cyber Security',
      'BBA Logistics and Supply Chain Management'
    ],
    whyChoose: [
      'Focus on practical training and industry needs',
      'Modern labs for Artificial Intelligence and Computing',
      'Experienced teachers from both academic and corporate backgrounds',
      'Placement support for students in top technology companies',
      'Regular workshops and seminars on latest digital trends'
    ],
    departments: ['Management', 'Computer Science', 'Commerce', 'Aviation'],
    faculty: [],
    facilities: ['Advanced Computing Lab', 'Digital Library', 'Aviation Mock-up Room'],
    admissions: 'Admissions are based on merit and entrance eligibility.',
    placements: ['TCS', 'Infosys', 'Wipro', 'Indigo'],
    gallery: [],
    contact: { address: '33/2, Hegde Nagar Main Rd, Bengaluru', phone: '080808 33000', email: 'info@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1769756914/kcmss_nh06dd.png'
  },
  {
    id: 'management',
    name: 'Karnataka College of Management',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Excellence in Strategic Business Leadership',
    overview: 'Karnataka College of Management is a premier business school dedicated to training students for leadership roles. Our MBA program is designed to develop sharp business minds and ethical managers.',
    courses: [
      { name: 'MBA' }
    ],
    specialCourses: [
      'MBA Advance Certificate Program in Logistics and Supply Chain Management'
    ],
    whyChoose: [
      'Corporate training integrated with the MBA curriculum',
      'Strong focus on logistics and supply chain specializations',
      'Regular industry visits and corporate interactions',
      'Assistance in building a professional network',
      'Focus on soft skills and personality development'
    ],
    departments: ['MBA Department'],
    faculty: [],
    facilities: ['Business Seminar Hall', 'Corporate Board Room', 'Research Center'],
    admissions: 'Admission through KMAT, MAT, or PGCET scores.',
    placements: ['Amazon', 'Deloitte', 'HDFC Bank', 'FedEx'],
    gallery: [],
    contact: { address: 'Yelahanka, Bengaluru', phone: '080808 33000', email: 'mba@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1769756853/kcm_afqvix.png'
  },
  {
    id: 'education',
    name: 'Karnataka College of Education',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Training Educators to Shape the Future',
    overview: 'Karnataka College of Education focuses on training the next generation of teachers. We provide students with the pedagogical skills and practical experience needed for modern classrooms.',
    courses: [
      { name: 'B.Ed' }
    ],
    whyChoose: [
      'Comprehensive teacher training programs',
      'Practical teaching experience in group-run schools',
      'Workshops on modern teaching technologies',
      'Focus on psychology and student behavior management',
      'Preparation for various teaching eligibility tests'
    ],
    departments: ['B.Ed Department'],
    faculty: [],
    facilities: ['Methodology Labs', 'Education Technology Cell', 'Art and Craft Center'],
    admissions: 'Admission based on university norms and merit.',
    placements: ['Reputed Schools', 'Educational Institutions', 'Online Learning Platforms'],
    gallery: [],
    contact: { address: 'Thirumenahalli, Bengaluru', phone: '080808 33000', email: 'bed@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'public-school',
    name: 'Karnataka Public School (CBSE)',
    category: InstitutionCategory.SCHOOL_EDUCATION,
    tagline: 'Holistic Education for a Global Future',
    overview: 'Karnataka Public School provides a safe and nurturing environment for students from LKG to 10th Grade. We focus on academic excellence alongside physical and creative growth.',
    courses: [
      { name: 'LKG to 10th Class' }
    ],
    whyChoose: [
      'Student-friendly and safe campus environment',
      'Balance of academic studies and co-curricular activities',
      'Well-equipped classrooms and play areas',
      'Experienced school teachers and supporting staff',
      'Focus on character building and holistic growth'
    ],
    departments: ['Primary Education', 'Secondary Education'],
    faculty: [],
    facilities: ['School Playground', 'Activity Rooms', 'Science Lab for Kids'],
    admissions: 'Direct inquiry and age-based selection.',
    placements: ['Internal progression to PU College'],
    gallery: [],
    contact: { address: 'Hegde Nagar, Bengaluru', phone: '080808 33000', email: 'school@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1768973897/9527slider1_eqzolb.jpg'
  },
  {
    id: 'pu-college',
    name: 'Karnataka Composite P.U. College',
    category: InstitutionCategory.PRE_UNIVERSITY,
    tagline: 'A Foundation for Professional Success',
    overview: 'Our PU College provides the critical bridge between school and higher education. We offer integrated coaching to ensure students are ready for both board exams and entrance tests.',
    courses: [
      { name: 'Science: PCMB' },
      { name: 'Science: PCME' },
      { name: 'Science: PCMCS' },
      { name: 'Science: PCMS' },
      { name: 'Commerce: EBAC' },
      { name: 'Commerce: HEBA' },
      { name: 'Commerce: BACsS' },
      { name: 'Commerce: SEBA' }
    ],
    whyChoose: [
      'Integrated coaching for NEET, JEE, and CET',
      'State-of-the-art science and commerce labs',
      'Well-stocked library with digital learning resources',
      'Regular test series for exam preparation',
      'Strong focus on academic discipline and performance'
    ],
    departments: ['Science Department', 'Commerce Department'],
    faculty: [],
    facilities: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Hub'],
    admissions: 'Based on 10th standard SSLC/CBSE/ICSE results.',
    placements: ['Career Counseling for Higher Education'],
    gallery: [],
    contact: { address: '33/2, Hegde Nagar, Bengaluru', phone: '080808 33000', email: 'pu@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'law',
    name: 'Karunadu College of Law',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Advocacy for Justice and Professional Excellence',
    overview: 'Karunadu College of Law provides a solid foundation for students aiming for a career in the legal field. We focus on developing advocacy skills and a deep understanding of the Indian legal system.',
    courses: [
      { name: 'LL.B (3 Years)' }
    ],
    whyChoose: [
      'Modern moot court for practicing legal arguments',
      'Extensive library with digital law journals and records',
      'Qualified faculty with years of legal experience',
      'Regular seminars with practicing lawyers and judges',
      'Practical exposure through legal aid camps'
    ],
    departments: ['Legal Studies'],
    faculty: [],
    facilities: ['Moot Court', 'Law Library', 'Legal Aid Cell'],
    admissions: 'Selection based on merit and academic performance.',
    placements: ['Legal Firms', 'Corporate Legal Departments', 'Independent Practice Support'],
    gallery: [],
    contact: { address: 'Bengaluru', phone: '080808 33000', email: 'law@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'allied-health',
    name: 'Karunadu College of Allied Health Science',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Advance Diagnostic and Laboratory Technology',
    overview: 'Karunadu College of Allied Health Science offers specialized degree programs for those wanting to work in medical diagnostics and technology support in hospitals.',
    courses: [
      { name: 'B.Sc MLT' },
      { name: 'B.Sc MIT' },
      { name: 'B.Sc AT & OT' },
      { name: 'B.Sc Renal Dialysis' }
    ],
    whyChoose: [
      'Modern diagnostic labs for hands-on training',
      'Curriculum focused on latest medical equipment',
      'Training in real hospital environments',
      'Specialized focus on Renal Dialysis and Anesthesia technology',
      'Career support in diagnostic centers and hospitals'
    ],
    departments: ['Diagnostic Sciences'],
    faculty: [],
    facilities: ['Pathology Lab', 'Radiology Suite', 'Dialysis Training Center'],
    admissions: 'Based on 10+2 science scores and interview.',
    placements: ['Diagnostic Chains', 'Private Hospitals', 'Public Health Centers'],
    gallery: [],
    contact: { address: 'Bengaluru', phone: '080808 33000', email: 'alliedhealth@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'paramedical',
    name: 'Kaveri Paramedical College',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Technical Expertise in Medical Support Services',
    overview: 'Kaveri Paramedical College provides essential diploma programs for students who wish to enter the healthcare workforce quickly as skilled technicians.',
    courses: [
      { name: 'Diploma in MLT' },
      { name: 'Diploma in X-Ray Technology' },
      { name: 'Diploma in OT' },
      { name: 'Diploma in OTT' }
    ],
    whyChoose: [
      'Short-term professional diploma courses',
      'Focus on technical clinical skills',
      'Affordable education for healthcare careers',
      'Immediate job opportunities in hospital labs',
      'Small batch sizes for personalized attention'
    ],
    departments: ['Diploma Studies'],
    faculty: [],
    facilities: ['Paramedical Skill Lab', 'Imaging Center', 'Clinical Labs'],
    admissions: 'Direct admission based on high school results.',
    placements: ['Private Clinics', 'Medical Labs', 'Surgical Centers'],
    gallery: [],
    contact: { address: 'Thirumenahalli, Bengaluru', phone: '080808 33000', email: 'kaveri@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  },
  {
    id: 'physiotherapy',
    name: 'Manjunatha College of Physiotherapy',
    category: InstitutionCategory.HIGHER_EDUCATION,
    tagline: 'Restoring Movement and Enhancing Health',
    overview: 'Manjunatha College of Physiotherapy is dedicated to training professionals who help people recover from physical injuries and manage health through exercise and therapy.',
    courses: [
      { name: 'BPT' },
      { name: 'MPT' }
    ],
    whyChoose: [
      'In-house physiotherapy clinic for clinical practice',
      'Specialized training in sports and neurological rehab',
      'Expert faculty from the physiotherapy industry',
      'Regular workshops on modern therapeutic techniques',
      'Internship opportunities in multispecialty hospitals'
    ],
    departments: ['Physiotherapy Department'],
    faculty: [],
    facilities: ['Physio OPD', 'Advanced Rehab Center', 'Exercise Therapy Lab'],
    admissions: 'Based on academic merit and entrance performance.',
    placements: ['Sports Clinics', 'Rehabilitation Centers', 'Hospitals'],
    gallery: [],
    contact: { address: 'Bengaluru', phone: '080808 33000', email: 'physio@karnatakacollege.edu' },
    image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg'
  }
];