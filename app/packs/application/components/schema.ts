enum Role {
  User,
  Admin,
}

type Faculty = {
  id: string;
  name: string;
};

type Course = {
  id: string;
  name: string;
  faculty: Faculty;
};

type User = {
  id: string;
  name: string;
  courses: Course[];
  role: Role;
};

type Appointment = {
  id: string;
  name: string;
  description: string;
  faculty: Faculty;
  course: Course;
  requested: string;
};

const FACULTY_MATH: Faculty = { id: "math", name: "Math" };
const FACULTY_STAT: Faculty = { id: "stat", name: "Stat" };

const COURSE_MATH_101: Course = {
  id: "math_101",
  name: "Math 101",
  faculty: FACULTY_MATH,
};
const COURSE_MATH_102: Course = {
  id: "math_101",
  name: "Math 102",
  faculty: FACULTY_MATH,
};
const COURSE_STAT_101: Course = {
  id: "stat_101",
  name: "Stat 101",
  faculty: FACULTY_STAT,
};
const COURSE_STAT_102: Course = {
  id: "stat_101",
  name: "Stat 102",
  faculty: FACULTY_STAT,
};

export const COURSES: Course[] = [
  COURSE_MATH_101,
  COURSE_MATH_102,
  COURSE_STAT_101,
  COURSE_STAT_102,
];

export const FACULTIES: Faculty[] = [FACULTY_MATH, FACULTY_STAT];

export const APPOINTMENTS: Appointment[] = [
  {
    id: "ringo",
    name: "Ringo",
    description: "Help!",
    faculty: FACULTY_MATH,
    course: COURSE_MATH_101,
    requested: "2023-06-23T00:30:00+0000",
  },
  {
    id: "george",
    name: "George",
    description: "Help!",
    faculty: FACULTY_STAT,
    course: COURSE_STAT_101,
    requested: "2023-06-23T00:30:00+0000",
  },
];

export const USERS: User[] = [
  {
    id: "joanna",
    name: "Joanna Niezen",
    role: Role.Admin,
    courses: [COURSE_MATH_101, COURSE_MATH_102],
  },
  {
    id: "kevin",
    name: "Kevin Sylvestre",
    role: Role.User,
    courses: [COURSE_STAT_101, COURSE_STAT_102],
  },
];
