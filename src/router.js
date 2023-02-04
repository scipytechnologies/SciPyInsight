// import { createBrowserRouter } from 'react-router-dom'
// import App from './App';
// import SignIn from './scenes/main/SignIn'
// import SignUp from './scenes/main/SignUp'
// import Dashboard from './scenes/admin/Dashboard'
// import Batch from './scenes/admin/Batch';
// import Batches from './scenes/admin/Batches'
// import Student from './scenes/admin/Student';
// import Teacher from './scenes/admin/Teacher';
// import Teachers from './scenes/admin/Teachers';
// import Students from './scenes/admin/Students';
// import Home from './scenes/admin/Home';
// import StudentHome from './scenes/student/Home';
// import TeacherHome from './scenes/teacher/Home';
// import TeacherBatch from './scenes/teacher/Batches';
// import StudentClass from './scenes/student/Class'
// import StudentNav from './scenes/student/Navbar'
// import LandingPage from './scenes/main/LandingPage';


// import StudentProfile from './scenes/student/Profile'
// import AdvancedClass from './scenes/student/AdvancedClass'

// // import LandingPage from  './scenes/main/LandingPage'



// export const router = createBrowserRouter([
//     {
//         element: <App />,
//         children: [
//             {
//                 path: '/',
//                 element: <LandingPage />
//             },
//             {
//                 path: '/register',
//                 element: <SignUp />
//             },
//             {
//                 path: '/login',
//                 element: <SignIn />
//             },
//             {
//                 path: 'admin',
//                 element: <Dashboard />,
//                 children: [
//                     {
//                         path: '/admin/home',
//                         element: <Home />
//                     },
//                     {
//                         path: '/admin/batches',
//                         element: <Batches />
//                     },
//                     {
//                         path: '/admin/batches/:batchId',
//                         element: <Batch />
//                     },
//                     {
//                         path: '/admin/students',
//                         element: <Students />
//                     },
//                     {
//                         path: '/admin/students/:studentId',
//                         element: <Student />
//                     },
//                     {
//                         path: '/admin/teachers',
//                         element: <Teachers />
//                     },
//                     {
//                         path: '/admin/teachers/:teacherId',
//                         element: <Teacher />
//                     },
//                 ]
//             },
//             {
//                 path: 'student',
//                 element: <StudentNav />,
//                 children: [
//                     {
//                         path: '/student/home',
//                         element: <StudentHome />
//                     },
//                     {
//                         path: '/student/class',
//                         element: <StudentClass />
//                     },
//                     {
//                         path: '/student/profile',
//                         element: <StudentProfile/>
//                     },
//                     {
//                         path: '/student/advancedClass',
//                         element: <AdvancedClass />
//                     }   
//                 ]
//             },  
//             {
//                 path: 'teacher',
//                 element: <TeacherHome />
//             },
//             {
//                 path: 'teacher/batches',
//                 element: <TeacherBatch/>
//             }
//         ]
//     },
// ]);