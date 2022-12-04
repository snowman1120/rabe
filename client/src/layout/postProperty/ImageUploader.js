import {useState, useRef} from "react";
import ImageUploading from "react-images-uploading";
import { Alert, Button } from "react-bootstrap";
import $ from 'jquery';

const ImageUploader = ({onChange}) => {
  const dropzoneRef = useRef();
  const mainPhotoRef = useRef();
 const option = {
    //maxNumber : 5,
    acceptType : ["jpeg", "jpg", "png"],
    maxFileSize : 5000000
  };
  const [images, setImages] = useState([]);
 
  const onChangeImages = (imageList, addUpdateIndex) => {
    setImages(imageList);

    if(imageList.length > 0) {
      $(dropzoneRef.current).removeClass('col-md-12');
      $(dropzoneRef.current).addClass('col-md-8');
      $(mainPhotoRef.current).removeClass('d-none');
    } else {
      $(dropzoneRef.current).removeClass('col-md-8');
      $(dropzoneRef.current).addClass('col-md-12');
      $(mainPhotoRef.current).addClass('d-none');
    }

    onChange(imageList);
  };
  const onError = () => {
    setImages([]);
  };
  const printjson = () => {
    document.getElementById("jsonprint").innerHTML = JSON.stringify(
      images,
      null,
      6
    ).replace(/\n( *)/g, function (match, p1) {
      return "<br>" + "&nbsp;".repeat(p1.length);
    });
    //console.log(images);
  };
 
  return (
    <div>
      <div className="image-uploader">
        <h4> Photos </h4>
        <p>Click on a photo to add a caption or delete a photo.</p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChangeImages}
          onError={onError}
          {...option}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            errors
          }) => (
            <>
              {errors && (
                <Alert color="danger text-start">
                  <ul>
                    {errors.maxNumber && (
                      <li>Number of selected images exceed maxNumber</li>
                    )}
                    {errors.acceptType && (
                      <li>Your selected file type is not allow</li>
                    )}
                    {errors.maxFileSize && (
                      <li>Selected file size exceed maxFileSize</li>
                    )}
                  </ul>
                </Alert>
              )}
  
              <div className="upload__image-wrapper">
                <div className="row">
                  <div
                      className="dropzone col-md-12"
                      ref={dropzoneRef}
                      {...dragProps}
                      onClick={onImageUpload}
                      style={
                        isDragging
                          ? { backgroundColor: "#afafaf", color: "white" }
                          : undefined
                      }
                    >
                    <div className="dropZoneContent">
                        <span className="icon-gallery-image"></span>
                        <div className="dragHint">Drag and drop photos here to upload.</div>
                    </div>
                  </div>
                  <div className="main-photo col-md-4 col-xs-12 d-none" ref={mainPhotoRef}>
                    <div className="image-container">
                        {images.length > 0 ? (<img src={images[0]["data_url"]} alt="" onClick={() => onImageUpdate(0)} />) : ''}
                        <div className="icon-gallery-delete-image" onClick={() => onImageRemove(0)}></div>
                        <div className="main-photo-label">Main Photo</div>
                    </div>
                  </div>
                </div>
                <div className="p-2" style={{ textAlign: "left" }}>
                  {imageList.map((image, index) => {
                    return index == 0 ? '' : (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" onClick={() => onImageUpdate(index)} />
                      <div className="icon-gallery-delete-image" onClick={() => onImageRemove(index)}></div>
                    </div>
                    )}
                  )}
                </div>
                {images.length > 0 && (
                  <>
                    <hr />
                    <div className="text-start p-2">
                      {/* <Button onClick={printjson} variant="primary">
                        Upload
                      </Button>{" "} */}
                      <Button onClick={onImageRemoveAll} variant="danger">
                        Remove All Images
                      </Button>
                    </div>
                    <pre className="text-start" id="jsonprint"></pre>
                  </>
                )}
              </div>
            </>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};
 
export default ImageUploader;