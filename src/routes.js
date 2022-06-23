import {createWebHistory,createRouter} from 'vue-router'

import Index from './components/Index.vue'
import StudentList from './components/student/StudentList.vue'

import AddCourse from './components/course/AddCourse.vue'
import EditCourse from './components/course/EditCourse.vue'
import CourseList from './components/course/CourseList.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

import AddLeacture from './components/leacture/AddLeacture.vue'
import EditLeacture from './components/leacture/EditLeacture.vue'
import LeactureList from './components/leacture/LeactureList.vue'
import Details from './components/leacture/Details.vue'
import CategoryList from './components/category/CategoryList.vue'

import InstructorList from './components/instructor/InstructorList.vue'
// import { list } from 'postcss'

const routes =[
    {  
        name:'Signin',
        path:'/signin',
        component:Signin,
        // beforeEnter: (to, from, next) => {
        //     if(!localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/index');
        //     }
        // }
    },
    {  
        name:'Signup',
        path:'/signup',
        component:Signup,
        // beforeEnter: (to, from, next) => {
        //     if(!localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/index');
        //     }
        // }
    },
    {  
        name:'Index',
        path:'/index',
        component:Index,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'StudentList',
        path:'/student-list',
        component:StudentList,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'AddCourse',
        path:'/add-course',
        component:AddCourse,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'CourseList',
        path:'/course-list',
        component:CourseList,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'EditCourse',
        path:'/edit-course',
        component:EditCourse,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'AddLeacture',
        path:'/add-leacture',
        component:AddLeacture,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'EditLeacture',
        path:'/edit-leacture',
        component:EditLeacture,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'LeactureList',
        path:'/leacture-list',
        component:LeactureList,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {  
        name:'Details',
        path:'/leacture-detail',
        component:Details,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {
        name:'CategoryList',
        path:'/category-list',
        component:CategoryList,
        // beforeEnter: (to, from, next) => {
        //     if(localStorage.getItem('tokenKEY')){
        //         next();
        //     }else{
        //         next('/signin');
        //     }
        // }
    },
    {
        name:'InstructorList',
        path:'/instructor-list',
        component:InstructorList,
    //     beforeEnter: (to, from, next) => {
    //         if(localStorage.getItem('tokenKEY')){
    //             next();
    //         }else{
    //             next('/signin');
    //         }
    //     }
     }
    
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;