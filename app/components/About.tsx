import React from 'react';
import about from '../images/about us.png';
import Image from 'next/image';

const About = () => {
return(
    <>

<div className="container">
    <h1 className="text-center" style={{fontWeight: "bold", marginTop:"50px"}}>About Us</h1>
    <div className="about-us">
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <Image className="card-image-top" alt="" src={about.src} height={350} width={300} layout='responsive' />
                </div>
            </div>
            <div className="col-md-7">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic alias in nemo odio, velit quam quaerat eius. Ratione blanditiis animi adipisci laborum modi laboriosam debitis eos delectus rem natus, eveniet beatae quae voluptate repellat exercitationem error deleniti, neque quas numquam necessitatibus accusantium est perferendis? Sunt possimus quidem voluptate, beatae necessitatibus unde aliquam perferendis. Odio quidem sequi, ut esse ipsa rerum quis enim debitis hic, tempora tenetur. Labore fugiat commodi quae unde assumenda molestias quaerat, sed asperiores culpa atque nesciunt fuga voluptatem eos nemo quos rerum neque incidunt aliquid, odio nulla. Perferendis earum necessitatibus asperiores at aliquam voluptas itaque tempore, excepturi atque consectetur. Ad, atque. Impedit deleniti, vel dolorem eos earum saepe placeat nulla ullam praesentium vitae, dolores quo dolor repudiandae facere, sapiente possimus consectetur accusantium reprehenderit. Reprehenderit mollitia molestias iusto laborum nemo odit voluptate quidem consequuntur magni quaerat quas atque quae adipisci ratione tempore, ducimus labore accusamus. Iste, in ea!</p>

            </div>
        </div>
    </div>
</div>
    </>
);
};
export default About;
