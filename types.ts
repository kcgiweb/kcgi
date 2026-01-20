export enum InstitutionCategory {
  HIGHER_EDUCATION = 'Higher Education',
  SCHOOL_EDUCATION = 'School Education'
}

export interface Course {
  name: string;
  duration?: string;
  eligibility?: string;
}

export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  image: string;
}

export interface Institution {
  id: string;
  name: string;
  category: InstitutionCategory;
  tagline: string;
  overview: string;
  courses: Course[];
  specialCourses?: string[];
  whyChoose: string[];
  departments: string[];
  faculty: FacultyMember[];
  facilities: string[];
  admissions: string;
  placements: string[];
  gallery: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  image: string;
}