import React from "react";
import { categories } from "../../constants";
import { courses } from "../../constants";
import Categories from "./Categories";
import CoursesDetails from "./CoursesDetails";
const Course = () => {
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Category</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          saepe nostrum vitae aut consequatur, quis, quia, necessitatibus quo
          similique veritatis ea aliquid! Dolore odio nobis ratione odit,
          assumenda aliquid dicta!
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category)=>{
          return <Categories key={category.id} {...category}/>
        })}
      </div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
          <div className="flex gap-8 md:w-full sm-w-[170%] xs-[340%] w-[480%] animate-slide">
            {courses.map((course)=>{
              return <CoursesDetails key={course.id} {...course} />
            })}
          </div>
      </div>
    </div>
  );
};

export default Course;
