// import React, { useState } from 'react'
// import '../App.css';



// let Screen=[
//     {id:1,
//     time:"10.00pm",
//     seate:[1,2,3]},

//     {id:2,
//     time:"11.00pm",
//     seate:[1,2,3]},

// ];



// let Movie=[
//     {id:1,
//     time:"10.00pm",
//     title:"thunivu",
//     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2XouSc5Ew2Hfs_yr8ML2k3&ust=1692450638730000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDKrY-k5oADFQAAAAAdAAAAABAE"},

//     {id:2,
//     time:"11.00pm",
//     title:"varisu",
//     image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2XouSc5Ew2Hfs_yr8ML2k3&ust=1692450638730000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDKrY-k5oADFQAAAAAdAAAAABAE"},

//     {id:2,
//         time:"11.00pm",
//         title:"akilan",
//         image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw2XouSc5Ew2Hfs_yr8ML2k3&ust=1692450638730000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDKrY-k5oADFQAAAAAdAAAAABAE"},



// ];


// function Movibooking() {

//   const[selectedmovie,setselectedmovie]=useState(null)
//   const[selectedscreen,setselectedscrren]=useState()
//   return (
//     <div>Movibooking
//    <h2>choose your movie</h2>
//    <div className='movieapp'>

//     {
        
// Movie.map((Movie)=>
// (

// <div className='movie' key={Movie.id}  onClick={()=>setselectedmovie(Movie)}>
// <img className='movie-poster' src={Movie.image}  alt={Movie.title}/>
// <div className='Movie-title'>  {Movie.time}    </div>
    
//       </div>))

//     },


//    </div>
// {


//     selectedmovie&&(


//         <>
//         <h2>select your screen</h2>
//         <div className='select screen'></div>

//         {
//     Screen.map((Screen)=>{

//         return(
//             <div key={Screen.id} className={`Screen ${Screen.id === selectedscreen.id} ? 'selected'  : ''} 
//             ${Screen.seate.includes(1)} ? 'avilable' : ''`}>


//                 <div className='scrren-number'>{Screen.id}</div>
//                 <div className='scrren-number'>{Screen.time}</div>
//                 <div>{selectedmovie.title}</div>

//                 <div className='scrren-seats'>

//                     {
// Screen.seate.map((seate,index)=>{

//     return(
// <div key={index} className={`seate  ${seate ? "avilable"  : 'unavilable'} `}

//     )

    
// })


//                     }
//                 </div>


//             </div>

//         )
//     })


//         }
        
        
//         </>
//     )
// }




//     </div>

//   )
// }

// export default Movibooking



// chat gpt code




import React, { useState } from 'react';
import '../App.css';

let Screen = [
    {
        id: 1,
        time: "10.00pm",
        seate: [1, 2, 3]
    },
    {
        id: 2,
        time: "11.00pm",
        seate: [1, 2, 3]
    }
];

let Movie = [
    {
        id: 1,
        time: "10.00pm",
        title: "thunivu",
        image: "https://www.example.com/image1.jpg"
    },
    {
        id: 2,
        time: "11.00pm",
        title: "varisu",
        image: "https://www.example.com/image2.jpg"
    },
    {
        id: 3,
        time: "11.00pm",
        title: "akilan",
        image: "https://www.example.com/image3.jpg"
    }
];

function Movibooking() {
    const [selectedmovie, setselectedmovie] = useState(null);
    const [selectedscreen, setselectedscreen] = useState(null);
    const[selectedseate,setselectedseate]=useState([])

    return (
        <div>
            <h2>Movie Booking</h2>
            <div className='movieapp'>
                {Movie.map((movie) => (
                    <div className='movie' key={movie.id} onClick={() => setselectedmovie(movie)}>
                        <img className='movie-poster' src={movie.image} alt={movie.title} />
                        <div className='Movie-title'>{movie.time}</div>
                    </div>
                ))}
            </div>
            {selectedmovie && (
                <>
                    <h2>Select your screen</h2>
                    <div className='select screen'>
                        {Screen.map((screen) => (
                            <div
                                key={screen.id}
                                className={`Screen ${selectedscreen && selectedscreen.id === screen.id ? 'selected' : ''} ${
                                    screen.seate.includes(1) ? 'available' : ''
                                }`}
                                onClick={() => setselectedscreen(screen)}
                            >
                                <div className='screen-number'>{screen.id}</div>
                                <div className='screen-time'>{screen.time}</div>
                                <div>{selectedmovie.title}</div>
                                <div className='screen-seats'>
                                    {screen.seate.map((seat, index) => (
                                        <div
                                            key={index}
                                            className={`seat ${seat ? 'available' : 'unavailable'}${selectedseate.includes(index) ?  "booked" : ""}
 `}
                                          



                                        >

<div className='seate-num' > {index +1} </div>



                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Movibooking;
