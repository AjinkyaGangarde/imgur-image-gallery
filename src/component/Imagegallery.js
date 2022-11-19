import React from 'react'

export const Imagegallery = ({data}) => {
    console.log("====>",data);
  return (
        <section class="text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div class="h-4/6 flex flex-wrap -m-1 md:-m-2">
                        {
                            data && data?.map(({id, title, images})=> {
                                
                                    return (<div key={id} className="flex flex-wrap w-1/3">
                                        <div className="w-full p-1 md:p-2">
                                            {
                                                images && images.length &&
                                                <img 
                                                    alt={`${title}`} 
                                                    className="block object-cover object-center w-full h-full border-red-300 rounded-lg"
                                                    src={`${images[0].link}`}
                                                />
                                            }
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                </div>
            </section>
  )
}

{/* {   
            data && data?.map(({id, title, images})=> <div key={id}>
                                                <div className="flex flex-wrap justify-center">
                                                    {images && images.length && <img
                                                        src={`${ images[0].link}`}
                                                        className="p-1 bg-white border rounded max-w-sm"
                                                        alt="..."
                                                        />}
                                                    {title}
                                                </div>
                                            </div>
            )
        } */}
        
