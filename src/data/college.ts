export const college = {
  name: "Government Graduate College for Women",
  location: "Qila Didar Singh, Gujranwala",
  shortName: "GGCW Qila Didar Singh",
  tagline: "Educating women, elevating generations",
  taglineUrdu: "علم روشنی ہے — ہر بیٹی کا حق",
  address: "Hafizabad Road, Qila Didar Singh, District Gujranwala, Punjab, Pakistan",
  phone: "055-4710292",
  email: "info@ggcwqds.edu.pk",
  officeHours: "Monday – Friday, 8:00 a.m. – 2:00 p.m. (Saturday: 8:00 a.m. – 12:00 noon)",
};

export const tickerItems = [
  { text: "Admissions open for Intermediate, ADP and BS programmes — Session 2026-27.", urdu: false },
  { text: "داخلہ فارم جمع کرانے کی آخری تاریخ 30 اگست 2026 ہے۔", urdu: true },
  { text: "CM Honhaar Scholarship applications are now being accepted at the Admissions Office.", urdu: false },
  { text: "بی ایس چہارم سمسٹر کے نتائج نوٹس بورڈ پر آویزاں کر دیے گئے ہیں۔", urdu: true },
];

export const stats = [
  { value: "13", label: "Academic Departments" },
  { value: "11", label: "Programmes Offered" },
  { value: "1998", label: "Year Established" },
  { value: "1,800+", label: "Enrolled Students" },
];

export type Programme = {
  id: string;
  level: string;
  duration: string;
  summary: string;
  disciplines: string[];
  eligibility: string;
  hod?: string;
  semesters?: { title: string; courses: string[] }[];
  groups?: { title: string; subjects: string[] }[];
};

export const programmes: Programme[] = [
  {
    id: "intermediate",
    level: "Intermediate",
    duration: "2 Years — Annual System",
    summary:
      "Pre-degree study under the Board of Intermediate and Secondary Education, Gujranwala, offered in three streams.",
    disciplines: ["F.Sc (Pre-Medical & Pre-Engineering)", "F.A (Humanities)", "I.C.S (Computer Science)"],
    eligibility: "Matriculation (SSC) from a recognised board with at least 45% marks. Stream-specific subject requirements apply.",
    groups: [
      {
        title: "F.Sc — Pre-Medical",
        subjects: ["Biology", "Chemistry", "Physics", "English", "Urdu", "Islamic Studies / Ethics", "Pakistan Studies"],
      },
      {
        title: "F.Sc — Pre-Engineering",
        subjects: ["Mathematics", "Chemistry", "Physics", "English", "Urdu", "Islamic Studies / Ethics", "Pakistan Studies"],
      },
      {
        title: "F.A — Humanities",
        subjects: ["Economics", "Civics", "Islamic Studies (Elective)", "Home Economics", "Education", "English", "Urdu"],
      },
      {
        title: "I.C.S — Computer Science",
        subjects: ["Computer Science", "Mathematics", "Physics / Statistics", "English", "Urdu", "Islamic Studies", "Pakistan Studies"],
      },
    ],
  },
  {
    id: "adp",
    level: "Associate Degree Programme (ADP)",
    duration: "2 Years — 4 Semesters",
    summary:
      "A two-year associate degree affiliated with University of the Punjab, with credit transfer into the fourth semester of the relevant BS programme.",
    disciplines: ["English", "Islamic Studies", "Elementary Education"],
    eligibility:
      "Intermediate (HSSC) or equivalent with a minimum of 45% marks. Candidates must appear before the departmental admission committee.",
    hod: "To be announced",
    semesters: [
      { title: "Semester I", courses: ["Functional English", "Islamic Studies", "Introduction to the Discipline", "Pakistan Studies", "Quantitative Reasoning I"] },
      { title: "Semester II", courses: ["Expository Writing", "Applied Discipline Course", "Computer Applications", "Quantitative Reasoning II", "Civics & Community Engagement"] },
      { title: "Semester III", courses: ["Discipline Core I", "Discipline Core II", "Research Methods", "Elective I", "Entrepreneurship"] },
      { title: "Semester IV", courses: ["Discipline Core III", "Discipline Core IV", "Field Practicum / Internship", "Elective II", "Capstone Report"] },
    ],
  },
  {
    id: "bs",
    level: "BS (Honours)",
    duration: "4 Years — 8 Semesters",
    summary:
      "Four-year undergraduate honours degree affiliated with University of the Punjab, offered across five disciplines under the HEC Undergraduate Education Policy.",
    disciplines: ["English", "Islamic Studies", "Elementary Education", "Urdu", "Computer Science"],
    eligibility:
      "Intermediate (HSSC) or equivalent with at least 45% marks in the relevant group. Computer Science requires Mathematics at intermediate level or a deficiency course in the first year.",
    hod: "To be announced",
    semesters: [
      { title: "Semester I", courses: ["Functional English", "Islamic Studies", "Quantitative Reasoning I", "Discipline Foundation I", "Ideology & Constitution of Pakistan"] },
      { title: "Semester II", courses: ["Expository Writing", "Quantitative Reasoning II", "Discipline Foundation II", "Natural Sciences", "Civics & Community Engagement"] },
      { title: "Semester III", courses: ["Discipline Core I", "Discipline Core II", "Arts & Humanities Elective", "Social Sciences Elective", "Computer Applications"] },
      { title: "Semester IV", courses: ["Discipline Core III", "Discipline Core IV", "Discipline Core V", "Entrepreneurship", "Interdisciplinary Elective"] },
      { title: "Semester V", courses: ["Advanced Discipline Course I", "Advanced Discipline Course II", "Research Methodology", "Elective I", "Elective II"] },
      { title: "Semester VI", courses: ["Advanced Discipline Course III", "Advanced Discipline Course IV", "Elective III", "Elective IV", "Field Study"] },
      { title: "Semester VII", courses: ["Specialisation I", "Specialisation II", "Elective V", "Thesis / Project I", "Teaching Practicum"] },
      { title: "Semester VIII", courses: ["Specialisation III", "Specialisation IV", "Elective VI", "Thesis / Project II", "Comprehensive Viva"] },
    ],
  },
];

export const departments = [
  { name: "Islamiat", hod: "To be announced", description: "Quranic studies, Hadith, Fiqh and Islamic history, with a focus on ethical formation." },
  { name: "Chemistry", hod: "To be announced", description: "Organic, inorganic and physical chemistry supported by two teaching laboratories." },
  { name: "Urdu", hod: "To be announced", description: "Classical and modern Urdu literature, linguistics, prosody and creative writing." },
  { name: "Home Economics", hod: "To be announced", description: "Food and nutrition, textiles, and household resource management." },
  { name: "Pakistan Studies", hod: "To be announced", description: "Freedom movement, constitutional development and contemporary national affairs." },
  { name: "Economics", hod: "To be announced", description: "Micro and macroeconomics, public finance and the economy of Pakistan." },
  { name: "Sociology", hod: "To be announced", description: "Social structures, rural communities and gender studies in the Pakistani context." },
  { name: "Mathematics", hod: "To be announced", description: "Calculus, algebra, geometry and mathematical methods for the sciences." },
  { name: "Statistics", hod: "To be announced", description: "Probability, statistical inference and data analysis with computing support." },
  { name: "Zoology, Botany & Biotechnology", hod: "To be announced", description: "Life sciences teaching with specimen collections and a shared biology laboratory." },
  { name: "Physics", hod: "To be announced", description: "Mechanics, electromagnetism and modern physics with practical demonstrations." },
  { name: "Psychology", hod: "To be announced", description: "General, developmental and educational psychology with counselling exposure." },
  { name: "Computer Science", hod: "To be announced", description: "Programming, databases, networks and software development in a dedicated lab." },
];

export const councilMembers = [
  { name: "Prof. [Name]", designation: "Principal — Chairperson" },
  { name: "Prof. [Name]", designation: "Vice Principal" },
  { name: "Prof. [Name]", designation: "Chief Proctor" },
  { name: "Prof. [Name]", designation: "Convener, Admission Committee" },
  { name: "Prof. [Name]", designation: "Convener, Examination Committee" },
  { name: "Prof. [Name]", designation: "In-charge, Discipline Committee" },
  { name: "Prof. [Name]", designation: "Librarian" },
  { name: "Mr. [Name]", designation: "Head Clerk / Office Superintendent" },
  { name: "Prof. [Name]", designation: "Coordinator, Scholarships & Financial Aid" },
  { name: "Prof. [Name]", designation: "Coordinator, Co-curricular Activities" },
];

export const faculty = [
  { name: "Prof. [Name]", designation: "Associate Professor of English" },
  { name: "Prof. [Name]", designation: "Assistant Professor of Chemistry" },
  { name: "Prof. [Name]", designation: "Assistant Professor of Urdu" },
  { name: "Prof. [Name]", designation: "Lecturer in Computer Science" },
  { name: "Prof. [Name]", designation: "Lecturer in Islamic Studies" },
  { name: "Prof. [Name]", designation: "Lecturer in Elementary Education" },
];

export const scholarships = [
  {
    title: "Chief Minister's Honhaar Scholarship Programme",
    titleUrdu: "وزیراعلیٰ ہونہار سکالرشپ پروگرام",
    blurb:
      "Full tuition support for talented students of Punjab from low-income households, covering fee, hostel and a monthly stipend for the duration of the degree.",
    eligibility: [
      "Domicile of Punjab and admission in an eligible ADP or BS programme",
      "Minimum 60% marks in the last examination passed",
      "Annual family income within the limit notified by the Punjab Government",
    ],
    how: "Apply online through the official Honhaar Scholarship portal during the announced window, then submit the printed application with attested documents to the College Scholarship Cell.",
  },
  {
    title: "Chief Minister's Laptop Scheme",
    titleUrdu: "وزیراعلیٰ لیپ ٹاپ سکیم",
    blurb:
      "Merit-based distribution of laptops to regular students of public-sector colleges and universities to support digital learning and research.",
    eligibility: [
      "Regular enrolment in an eligible ADP, BS or Intermediate programme",
      "Merit position as determined by the notified criteria",
      "Not a previous recipient of a laptop under any government scheme",
    ],
    how: "The College uploads verified student data to the PITB portal. Shortlisted students are notified on the College notice board and collect their device at the announced distribution ceremony.",
  },
];

export const feeStructure = [
  { type: "Admission Fee (one time)", amount: "Rs. 1,500" },
  { type: "Tuition Fee — Intermediate (per annum)", amount: "Rs. 3,600" },
  { type: "Tuition Fee — ADP (per semester)", amount: "Rs. 8,500" },
  { type: "Tuition Fee — BS (per semester)", amount: "Rs. 11,000" },
  { type: "Laboratory & Library Charges (per annum)", amount: "Rs. 2,000" },
  { type: "College Development Fund (per annum)", amount: "Rs. 1,200" },
  { type: "Examination Fee (per semester / annum)", amount: "As notified by the University / Board" },
  { type: "Student Welfare & Sports Fund", amount: "Rs. 500" },
];

export const admissionSteps = [
  {
    title: "Obtain the prospectus and application form",
    detail: "Collect the prospectus from the College Admission Cell or download the form from this website during the advertised admission window.",
  },
  {
    title: "Complete the form and attach documents",
    detail: "Fill the form in your own handwriting in block letters and attach attested copies of all required documents.",
  },
  {
    title: "Submit the form to the Admission Cell",
    detail: "Submit in person before the closing date. Incomplete forms are not entertained. Keep the acknowledgement slip.",
  },
  {
    title: "Check the merit list",
    detail: "Merit lists are displayed on the College notice board and this website according to the announced schedule.",
  },
  {
    title: "Deposit dues and confirm admission",
    detail: "Selected candidates deposit the prescribed dues in the designated bank branch and submit the challan copy to the office.",
  },
  {
    title: "Attend orientation and collect the timetable",
    detail: "Report on the notified commencement date for orientation, class allocation and issuance of the College identity card.",
  },
];

export const requiredDocuments = [
  "Attested copies of Matriculation / Intermediate result card and certificate (04 copies)",
  "Attested copies of the candidate's CNIC or B-Form (02 copies)",
  "Attested copy of the father's / guardian's CNIC (02 copies)",
  "Character certificate from the institution last attended",
  "Migration certificate (for candidates from other boards)",
  "Six recent passport-size photographs, attested",
  "Domicile certificate (where applicable)",
  "Original documents for verification at the time of interview",
];

export const importantDates = [
  { label: "Issuance of admission forms", labelUrdu: "داخلہ فارم کا اجرا", date: "01 August 2026" },
  { label: "Last date for submission of forms", labelUrdu: "فارم جمع کرانے کی آخری تاریخ", date: "30 August 2026" },
  { label: "Display of first merit list", labelUrdu: "پہلی میرٹ لسٹ کا اعلان", date: "05 September 2026" },
  { label: "Deposit of dues (first list)", labelUrdu: "فیس جمع کرانے کی تاریخ", date: "06 – 10 September 2026" },
  { label: "Commencement of classes", labelUrdu: "کلاسز کا آغاز", date: "20 September 2026" },
];

export type NoticeCategory = "Admission" | "Results" | "Exam Schedule" | "General";

export type Notice = {
  id: string;
  date: string;
  title: string;
  titleUrdu?: string;
  description: string;
  category: NoticeCategory;
  attachment?: string;
};

export const notices: Notice[] = [
  {
    id: "n-2026-014",
    date: "2026-08-01",
    title: "Admissions open for Session 2026-27",
    titleUrdu: "تعلیمی سال 2026-27 کے داخلے شروع",
    description:
      "Application forms for Intermediate, ADP and BS programmes are available at the Admission Cell. Last date for submission is 30 August 2026.",
    category: "Admission",
    attachment: "Admission-Notice-2026.pdf",
  },
  {
    id: "n-2026-013",
    date: "2026-07-24",
    title: "BS 4th Semester result declared",
    titleUrdu: "بی ایس چہارم سمسٹر کا نتیجہ",
    description:
      "The University has notified the result of the 4th semester examination. Students may collect their transcripts from the Examination Branch.",
    category: "Results",
    attachment: "BS-Sem4-Result.pdf",
  },
  {
    id: "n-2026-012",
    date: "2026-07-15",
    title: "Date sheet — Intermediate Part II supplementary examination",
    description:
      "The Board has issued the date sheet for the supplementary examination. Candidates must carry their roll number slips and College identity cards.",
    category: "Exam Schedule",
    attachment: "Inter-Part2-Datesheet.pdf",
  },
  {
    id: "n-2026-011",
    date: "2026-07-08",
    title: "CM Honhaar Scholarship — submission of verified data",
    titleUrdu: "ہونہار سکالرشپ کے لیے کوائف کی تصدیق",
    description:
      "Applicants must submit attested income certificates and result cards to the Scholarship Cell by 20 July 2026 for onward transmission.",
    category: "General",
    attachment: "Honhaar-Data-Notice.pdf",
  },
  {
    id: "n-2026-010",
    date: "2026-06-30",
    title: "Second merit list — ADP English",
    description: "The second merit list for ADP English has been displayed on the notice board. Selected candidates must deposit dues within three working days.",
    category: "Admission",
  },
  {
    id: "n-2026-009",
    date: "2026-06-18",
    title: "Summer vacation and office timings",
    titleUrdu: "گرمیوں کی تعطیلات اور دفتری اوقات",
    description: "The College will observe summer vacation from 01 June to 14 August 2026. The administrative office will remain open from 9:00 a.m. to 1:00 p.m.",
    category: "General",
  },
  {
    id: "n-2026-008",
    date: "2026-06-05",
    title: "Mid-term examination schedule — BS 6th Semester",
    description: "Mid-term examinations will commence on 20 June 2026. Detailed subject-wise schedule is available with the respective departments.",
    category: "Exam Schedule",
    attachment: "Midterm-Sem6.pdf",
  },
  {
    id: "n-2026-007",
    date: "2026-05-22",
    title: "Annual result — Intermediate Part I",
    description: "The annual result of Intermediate Part I has been received from BISE Gujranwala and is displayed department-wise.",
    category: "Results",
  },
];

export const noticeCategories: NoticeCategory[] = ["Admission", "Results", "Exam Schedule", "General"];