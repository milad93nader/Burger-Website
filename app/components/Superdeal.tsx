import React from 'react';
import sidebackground from '../images/side-background.png';
import Image from 'next/image';
const Superdeal = ( ) => {
 
  return (
    <>

<div className="container">
        <div className="card-content">
            <div className="row">
                <div className="col-md-6 py-3 py-md-0">
                    <h1>SUPER DEAL</h1>
                    <h1>BURGER</h1>
                    <h3>50% OFF</h3>
                    <h5>$100,50</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequuntur rem aliquam quam ipsam? Deserunt vitae repellat laboriosam, temporibus consectetur fugiat numquam aliquam impedit nostrum ipsum ea nihil cumque accusamus aliquid. Ad iure cumque nam veritatis et sit praesentium voluptas, animi ex omnis dolor ratione assumenda ipsum deleniti doloremque, corporis velit ipsam quam? Obcaecati, perspiciatis unde mollitia iste reprehenderit praesentium odio esse facilis ducimus dignissimos provident eaque maiores vitae maxime repudiandae consectetur, ex, harum beatae error eos repellat? Quas, quod? Ut, nesciunt velit in perferendis sunt architecto, eum natus dolor pariatur, illum magni aperiam ipsum. Aliquid, corporis voluptates. Enim error quo, dolorem ducimus consequuntur autem nam voluptate ipsam. Error iste ullam ipsa eius, dolores obcaecati esse temporibus eveniet iure nam minus modi quod asperiores earum vitae. Quia quaerat libero, sed, iure quae dignissimos iste saepe commodi necessitatibus harum alias voluptatum?</p>

                </div>
                <div className="col-md-6 py-3 py-md-0">
                    <div className="card">
                        <Image className="card-image-top" src={sidebackground.src} alt="" width={300} height={220} layout='responsive' />
                    </div>
    
                </div>
            </div>
            
        </div>
    </div>

    </>
  );
};

export default Superdeal;
