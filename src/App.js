import React, { Component } from "react";
import "./App.css";
import { useState, useEffect } from 'react'

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/250/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

const App = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://picsum.photos/list")
      .then(response => response.json())
      .then(response => {
        setPhotos(response)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const handleChange = (changePhotos) => {
    setPhotos(changePhotos)
    console.log(changePhotos)
  }
  return (
    <>
      <header>
        <h1>Photo Wall</h1>
        <p>

        </p>
      </header>
      <div className="cclassollage">
        {/* We use map here because Array.prototype.map is an expression,
            * and for loops are not. You'll learn more about this soon!
            */}
        {photos.map(photo => (
          <img
            alt={PHOTO_LIST_URL.filename}
            key={Math.random()}
            src={PHOTO_URL(photo.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App



// class App extends Component {
//   // 1. Declare a state object that will be used to track an array of photos
//   state = {
//     photos: [],
// };  

// componentDidMount() {
//   fetch("https://picsum.photos/list")
//   .then(response => response.json())
//   .then(response => {
//    this.setState((state, props) => ({
// photos: response
//    }))
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }

// handleChange(changePhotos) {
//   this.setState(changePhotos)
//   console.log(changePhotos)
// }

//   // 2. Declare a life cycle method
//   // This life cycle method should:
//   //  - will be called after the component is initially rendered
//   // - will fetch an array of photos
//   // - will add that array of photos to state once received
//   render() {
//     const { photos = [] } = this.state;
//     return (
//       <React.Fragment>
//         <header>
//           <h1>Photo Wall</h1>
//           <p>

//           </p>
//         </header>
//         <div className="collage">
//           {/* We use map here because Array.prototype.map is an expression,
//            * and for loops are not. You'll learn more about this soon!
//            */}
//           {this.state.photos.map(photo => (
//             <img 
//               alt={PHOTO_LIST_URL.filename}
//               key={Math.random()}
//               src={PHOTO_URL(photo.id)}
//             />
//           ))}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

