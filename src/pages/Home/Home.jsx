import React from "react";
import StudentCard from "../../components/StudentCard";
import TopNav from "../../components/TopNav";
import NavBar from "../../components/NavBar";

const Home = () => {
    const onlineCourses = [
        {
          course_id: 1,
          course_name: "Web Development Fundamentals",
          price: 49.99,
          details: "An introductory course on web development, covering HTML, CSS, and basic JavaScript.",
          image: "web_development.jpg"
        },
        {
          course_id: 2,
          course_name: "Data Science with Python",
          price: 79.99,
          details: "Learn data analysis and data visualization using Python and popular libraries like Pandas and Matplotlib.",
          image: "data_science.jpg"
        },
        {
          course_id: 3,
          course_name: "Mobile App Development with React Native",
          price: 69.99,
          details: "Create mobile apps for iOS and Android using React Native, a popular JavaScript framework.",
          image: "react_native.jpg"
        },
        {
          course_id: 4,
          course_name: "Machine Learning Fundamentals",
          price: 89.99,
          details: "A beginner-friendly course on machine learning concepts and algorithms.",
          image: "machine_learning.jpg"
        },
        {
          course_id: 5,
          course_name: "Digital Marketing Masterclass",
          price: 59.99,
          details: "Become an expert in digital marketing, including SEO, social media, and online advertising.",
          image: "digital_marketing.jpg"
        },
        {
          course_id: 6,
          course_name: "Graphic Design for Beginners",
          price: 54.99,
          details: "Learn the basics of graphic design, including design principles and software tools.",
          image: "graphic_design.jpg"
        },
        {
          course_id: 7,
          course_name: "Introduction to Artificial Intelligence",
          price: 74.99,
          details: "Explore the fundamentals of AI, including machine learning, neural networks, and natural language processing.",
          image: "artificial_intelligence.jpg"
        },
        {
          course_id: 8,
          course_name: "Photography Masterclass",
          price: 64.99,
          details: "Master the art of photography, covering camera techniques, composition, and post-processing.",
          image: "photography.jpg"
        },
        {
          course_id: 9,
          course_name: "JavaScript Web Development",
          price: 59.99,
          details: "Learn JavaScript for web development, including front-end and back-end development with Node.js.",
          image: "javascript_web_dev.jpg"
        },
        {
          course_id: 10,
          course_name: "Business Management and Leadership",
          price: 69.99,
          details: "Develop leadership and management skills for a successful business career.",
          image: "business_management.jpg"
        },
        {
          course_id: 11,
          course_name: "Creative Writing Workshop",
          price: 49.99,
          details: "Unlock your creative writing potential and develop your writing skills.",
          image: "creative_writing.jpg"
        },
        {
          course_id: 12,
          course_name: "Financial Planning and Investment",
          price: 79.99,
          details: "Learn financial planning and investment strategies for a secure financial future.",
          image: "financial_planning.jpg"
        },
        {
          course_id: 13,
          course_name: "Cybersecurity Essentials",
          price: 69.99,
          details: "Understand the fundamentals of cybersecurity and protect digital assets from threats.",
          image: "cybersecurity.jpg"
        },
        {
          course_id: 14,
          course_name: "Art History and Appreciation",
          price: 44.99,
          details: "Explore the history and appreciation of art from various periods and styles.",
          image: "art_history.jpg"
        },
        {
          course_id: 15,
          course_name: "E-commerce Business Strategies",
          price: 59.99,
          details: "Learn effective e-commerce strategies for building and growing an online business.",
          image: "ecommerce_strategies.jpg"
        }
        // You can continue to add more course objects as needed
      ];

    return (
        <>
        <TopNav></TopNav>
        <NavBar></NavBar>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto'>
        {
            onlineCourses.map((student)=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <StudentCard  course_name={student.course_name} course_id={student.course_id} price={student.price}  details={student.details} image={student.image} ></StudentCard>
                )
            })
        }

        </div>
        {/* <StudentCard name={name} id={id}></StudentCard> */}
        
        </>
    );
};

export default Home;