import React from 'react';

const Gallery = ({gallery, imageLoaded, width}) => {
  
  const configKeys = {
    "horizontal-1": {
      divs: 1,
      division: "",
      classes: ["full-width"],
      distribution: []
    },
    "horizontal-2": {
      divs: 1,
      division: "",
      classes: ["half-width"],
      distribution: []
    },
    "horizontal-3": {
      divs: 1,
      division: "",
      classes: ["third-width"],
      distribution: []
    },
    "top-2-bottom-1": {
      divs: 2,
      direction: "column",
      division: "",
      classes: ["half-width", "full-width"],
      distribution: [2, 1]
    },
    "top-1-bottom-2": {
      divs: 2,
      direction: "column",
      division: "",
      classes: ["full-width", "half-width"],
      distribution: [1, 2]
    },
    "left-1-right-2": {
      divs: 2,
      direction: "row",
      division: "",
      classes: ["full-width two-thirds", "full-width one-third"],
      distribution: [1, 2]
    },
    "left-2-right-1": {
      divs: 2,
      direction: "row",
      division: "",
      classes: ["full-width one-third", "full-width two-thirds"],
      distribution: [2, 1]
    },
    "left-poster-right-2": {
      divs: 2,
      direction: "row",
      division: "",
      classes: ["full-width percent-45", "full-width percent-55"],
      distribution: [1, 2]
    },
    "left-2-right-poster": {
      divs: 2,
      direction: "row",
      division: "",
      classes: ["full-width percent-55", "full-width percent-45"],
      distribution: [1, 2]
    },
    "left-poster-right-top-2-bottom-1": {
      divs: 4,
      division: "right",
      classes: ["full-width percent-35", "percent-65", "half-width", "full-width"],
      distribution: [1, 2, 1]
    },
    "left-poster-right-top-1-bottom-2": {
      divs: 4,
      division: "right",
      classes: ["full-width percent-35", "percent-65", "full-width", "half-width"],
      distribution: [1, 1, 2]
    },
    "left-top-2-bottom-1-right-poster": {
      divs: 4,
      division: "left",
      classes: ["percent-65", "half-width", "full-width", "full-width percent-35"],
      distribution: [2, 1, 1]
    },
    "left-top-1-bottom-2-right-poster": {
      divs: 4,
      division: "left",
      classes: ["percent-65", "full-width", "half-width", "full-width percent-35"],
      distribution: [1, 2, 1]
    },
  }

  const renderGallery = (gallery)  => {
    const {config, data} = gallery;
    const {divs, division, classes, distribution} = configKeys[config];
    let imageCounter = 0;
    let html;
    

    if (divs === 1) {
      html = (
        <div className={classes[0]}>
          {data.map((item, idx) => {
            return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
          })}
        </div>
        )
    } else if (divs === 2) {
      let {direction} = configKeys[config];
      html = (
        <>
        <div className={classes[0]} style={width > 1025 && direction === "column" ? {marginBottom: "3vh"} : {}}>
          {data.map((item, idx) => {
            if (idx < distribution[0]) {
              imageCounter += 1;
              return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
            }
          })}
        </div>
        <div className={classes[1]}>
          {data.map((item, idx) => {
            if (idx >= imageCounter && idx < imageCounter + distribution[1]) {
              imageCounter += 1;
              return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
            }
          })}
        </div>
        </>
      )
    } else if (divs === 4) {
      let limits = [distribution[0], distribution[0] + distribution[1], distribution[0] + distribution[1] + distribution[2], distribution[0] + distribution[1] + distribution[2] + distribution[3]];
      if (division  === "right") {
        html = (
          <>
          <div className={classes[0]}>
            {data.map((item, idx) => {
              if (idx < limits[0]) {
                imageCounter += 1;
                return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
              }
            })}
          </div>

          <div className={classes[1]}>
            <div className={classes[2]}>
              {data.map((item, idx) => {
                if (idx >= imageCounter && idx < limits[1]) {
                  imageCounter += 1;
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
                }
              })
              
              }
            </div>
            <div className={classes[3]}>
              {data.map((item, idx) => {
                if (idx >= imageCounter && idx < limits[2]) {
                  imageCounter += 1;
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
                }
              })}
            </div>
          </div>
          </>
        )
      } else if (division  === "left") {
        html = (
          <>
          <div className={classes[0]}>
            <div className={classes[1]}>
              {data.map((item, idx) => {
                if (idx < limits[0]) {
                  imageCounter += 1;
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
                }
              })}
            </div>
            <div className={classes[2]}>
              {data.map((item, idx) => {
                if (idx >= imageCounter && idx < limits[1]) {
                  imageCounter += 1;
                  return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
                }
              })
              
              }
            </div>
          </div>

          <div className={classes[3]}>
            {data.map((item, idx) => {
              if (idx >= imageCounter && idx < limits[2]) {
                imageCounter += 1;
                return <a key={idx} href={item.full} data-lightbox="gallery" className="thumb-link"><img src={item.thumb} alt={item.alt} className="thumb-img" onLoad={imageLoaded}/></a>
              }
            })}
          </div>

          </>
        )
      }
    }

    return html;
  }

  return (
    
    <div className="gallery">
      {renderGallery(gallery)}
    </div>
  )
}

export default Gallery;