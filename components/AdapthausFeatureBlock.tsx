import Link from "next/link";

const ADAPTHAUS_IMAGE = "/images/press/adapthaus-inauguration.jpg";

export function AdapthausFeatureBlock() {
  return (
    <div className="press-adapthaus-feature">
      <div className="press-adapthaus-feature-image-wrap">
        <div className="press-adapthaus-feature-image">
          <img src="/images/press/adapthaus-inauguration.jpg" alt="ADAPTHAUS Inauguration" width={1000} height={1000} />
        </div>
      </div>
      <div className="press-adapthaus-feature-content">
        <h3 className="press-adapthaus-feature-title">
          ADAPTHAUS Inauguration Event Articles and News
        </h3>
        <p className="press-adapthaus-feature-body">
          Coverage and highlights from the ADAPTHAUS inauguration event. On April 10th, 2021 
          ISD launched the finished 2021 Build Team Project - ADAPTHAUS. This was celebrated 
          with an opening event where we were joined by heads of departments, Vice Chancellors, 
          UIUC faculty, and many more amazing people who have supported us throughout this project.
        </p>
        <Link href="#" className="press-adapthaus-feature-cta">
          WCIA Coverage of the Event
        </Link>
      </div>
    </div>
  );
}
