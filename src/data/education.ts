export interface Education {
  school: string
  degree: string
  period: string
  coursesLabel: string
  courses: string
}

export const education: Education[] = [
  {
    school: 'Nanyang Technological University, Singapore',
    degree: 'B.Eng (Hons) Computer Engineering',
    period: '08/2024 – 05/2028',
    coursesLabel: 'Relevant Coursework',
    courses: 'Data Structures & Algorithms · OOP · Computer Networks · Digital Systems Design',
  },
  {
    school: 'Nanyang Junior College, Singapore',
    degree: "GCE 'A' Level",
    period: '02/2022 – 11/2023',
    coursesLabel: 'Subjects',
    courses: 'Physics · Chemistry · Mathematics · Economics',
  },
]
