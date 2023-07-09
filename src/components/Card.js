import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
   

    
    function clickHandler() {
        // logic write  down kro dost
        if(likedCourses.includes(course.id)){
            // pehle is liked hua pad hai
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id) ));
            toast.warning("Like Removed")
          
        }
        else{
            // pehle is like nahi hai ye course
            // insert karna hai ye course liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
                

            }
            else{
                // non empty pehle se
                setLikedCourses((prev) => [...prev,course.id]);

            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt='courseImage'/>

            <div  className='w-[40px] h-[40px] absolute bg-white rounded-full right-2 -bottom-2 grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ? (<FcLike fontSize={"1.75rem"}/>) : (<FcLikePlaceholder fontSize={"1.75rem"}/>)
                }
            </button>
        </div>
        </div>
     
        
        <div className='p-4'>
            <p className='text-white font-semibold leading-6 text-lg'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 0 ?
                    (course.description.substr(0,100)+"..."): (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card